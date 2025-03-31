// Import the menuArray from data.js
import { menuArray } from './data.js';


// Define the variables
const containerMenu = document.getElementById("container-menu");
const order = document.getElementById("order");
let modal = document.getElementById('modal');
const orderArr = [];// Array to store the order items


// Event listener for the menu and order buttons
document.addEventListener('click', (e) => {

    if (e.target.classList.contains('menu-btn')) {
        handleMenuBtnClick(e);
    } else if (e.target.classList.contains('order-btn')) {
        handleOrderBtnClick(e);
    } else if (e.target.classList.contains('remove')) {
        handleDeleteClick(e);
    }
});

// createMenu function itarates over the menuArray and creates the HTML for the menu items
function createMenu(menuArray) {
    let menuHTML = '';
    menuArray.forEach(menu => {
        const { name, ingredients, id, price, emoji } = menu;
        menuHTML += ` 
        <section class="menu-item">   
            <p class="menu-emoji">${emoji}</p>  
            <ul class="menu"> 
                <li class="name"><p>${name}</p></li>
                <li class="ingredients"><p>${ingredients.join(', ')}</p></li>
                <li class="price"><p>$${price}</p></li>
            </ul> 
            <div>
                <button class="menu-btn" data-order="${id}">+</button>
            </div>
        </section>`;
    });
    return menuHTML; 
}

// Event listener for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    containerMenu.innerHTML = createMenu(menuArray);
});

// handleMenuBtnClick function to handle the menu button click event
function handleMenuBtnClick(e) { 
    const foodId = e.target.dataset.order;
    // Find the food item in the menuArray with the id equal to the foodId
    const foodItem = menuArray.find(item => item.id == foodId);
//check if the food item exists and push it to the order array
    if (foodItem) {
        orderArr.push(foodItem);
        renderOrder(orderArr);  // Call function to update the UI
    }
}

// renderOrder function to render the order items
function renderOrder(orderArr) {
    // Calculate the total price of the order
    let totalPrice = orderArr.reduce((sum, food) => sum + food.price, 0);
// Create the HTML for the order items and the total price
    let orderHTML = `<section>
        <h2>Your order</h2>
        ${orderArr.map(item => `
            <div class="orders">
                <p class="ordered-items">${item.name}</p>
                <button class="remove" data-remove="${item.id}">remove</button>
                <p class="ordered-price">$${item.price}</p>
            </div>
        `).join('')}
        <div class="total">
            <p class="total-price">Total price:</p>
            <p class="total-usd">$${totalPrice}</p>
        </div>
        <button class="order-btn" id="order-btn">Complete order</button>
        </section>
    `;
    order.innerHTML = orderHTML; // Set the inner HTML of the order element

}

// handleDeleteClick function to handle the delete button click event
function handleDeleteClick(e) {
    const foodId = e.target.dataset.remove;
    // Find the food item in the orderArr with the id equal to the foodId
    const foodIndex = orderArr.findIndex(item => item.id == foodId);
//check if the food item exists and remove it from the order array
    if (foodIndex > -1) {
        orderArr.splice(foodIndex, 1);
        renderOrder(orderArr);  // Update the order list
    }
}

// handleOrderBtnClick function to handle the order button click event
function handleOrderBtnClick(e) {
    modal.style.display = 'flex';  
}


// Event listener for the submit event on the consent form
document.addEventListener('DOMContentLoaded', function() {
    const consentForm = document.querySelector('.modal-content');
    const modal = document.getElementById('modal');
    const card = document.querySelector('.card');
    const order = document.getElementById('order');

// Event listener for the submit event on the consent form
    if (consentForm) {
        consentForm.addEventListener('submit', function(e) {
            e.preventDefault();
// Get the form data and store it in a FormData object and get the value of the fullName input
            const form = e.target;
            const modalContentData = new FormData(form);
            const fullName = modalContentData.get('fullName');

            card.innerHTML = `<div>
                <p class="thanks">Thanks, ${fullName}! Your order is on its way!</p>
            </div>`;
// Hide the order and modal elements and display the card element
            order.style.display = 'none';
            modal.style.display = 'none';
            card.style.display = 'flex';
        });
    }
});
