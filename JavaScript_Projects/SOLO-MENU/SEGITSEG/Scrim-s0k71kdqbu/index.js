// import { menuArray } from "./data.js";
// const foodList = document.getElementById("food-list")
// const checkout = document.getElementById("checkout")

// function renderFoodList(foodlistArr){
    
//    const renderedFood = foodlistArr.map(function(food){
//         const {name, ingredients,id, price, emoji} = food
        
//         let ingredientsList = ""
        
//         ingredients.forEach(function(ingredient){
//             ingredientsList += ingredient + " "
//         })
        
//         return `<div class="food-item">
           
//             <div class="food-item-container">
//             <div class="food-item-emoji">
//                 <p> ${emoji} </p>
//             </div>

//            <div class="food-item-description" id="${id}">
//             <p class="bold"> ${name} </p>
//             <p> ${ingredientsList} </p>
//             <p class="bold"> ${price} </p>
//            </div>
//            </div>

//            <button class="food-item-button" data-id="${name}"> + </button> 
           
//            </div>`
//     })
    
//    foodList.innerHTML = renderedFood.join("")
    
    
    
// }

// function renderOrder(orderArr){
    
//     const pickedFood = orderArr.map(function(order){
//         const {name, ingredients,id, price, emoji} = order
        
//         return `    <div class="checkout-container">
       
//       <div class="checkout-title">  <p> Your Order </p> </div>
//       <div class="checkout-item">
//       <div class="checkout-item-text"> <p>${name}</p> <button>remove</button> </div>
//       <p> price </p>  
//       </div>
//         <div class="line"> </div>
//        <div class="combined-price"> <p> total price </p> <p> price </p> </div>
//        <div class="checkout-btn-container"> <button> Complete Order </button> </div>
//        </div>
//             `
//     })
    
// }

// renderFoodList(menuArray)
// renderOrder(menuArray)

// document.addEventListener("click", function(e){
//     if (e.target.dataset.id) {
//         console.log(e.target.dataset.id)
//     }
// })


import { menuArray } from "./data.js";  // Assuming data.js is in the same folder

const foodList = document.getElementById("food-list");
const checkout = document.getElementById("checkout");
const orderArray = [];

// Function to render the food list
function renderFoodList(foodlistArr) {
    const renderedFood = foodlistArr.map(function(food) {
        const { name, ingredients, id, price, emoji } = food;

        let ingredientsList = "";
        ingredients.forEach(function(ingredient) {
            ingredientsList += ingredient + " ";
        });

        return `
            <div class="food-item">
                <div class="food-item-container">
                    <div class="food-item-emoji">
                        <p> ${emoji} </p>
                    </div>
                    <div class="food-item-description" id="${id}">
                        <p class="bold"> ${name} </p>
                        <p> ${ingredientsList} </p>
                        <p class="bold"> $${price} </p>
                    </div>
                </div>
                <button class="food-item-button" data-id="${id}"> + </button> 
            </div>
        `;
    });

    foodList.innerHTML = renderedFood.join("");
}

// Function to render the checkout
function renderOrder(orderArr) {
    if (orderArr.length === 0) {
        // If no items are in the order, clear the checkout and hide it
        checkout.innerHTML = '';
        checkout.classList.remove('visible');
        return;
    }

    // Generate the HTML for the items in the order
    const pickedFood = orderArr.map(function(order) {
        const { name, price, id } = order;

        return `
            <div class="checkout-item" data-id="${id}">
                <div class="checkout-item-text">
                    <p>${name}</p>
                    <button class="remove-item-btn" data-id="${id}">Remove</button>
                </div>
                <p>$${price}</p>  
            </div>
        `;
    }).join('');

    // Calculate the total price of the items in the order
    const totalPrice = orderArr.reduce((sum, food) => sum + food.price, 0);

    // Render the checkout with the items and the total price
    checkout.innerHTML = `
        <div class="checkout-container">
            <div class="checkout-title"><p>Your Order</p></div>
            ${pickedFood}
            <div class="line"></div>
            <div class="combined-price">
                <p>Total Price:</p>
                <p>$${totalPrice}</p>
            </div>
            <div class="checkout-btn-container">
                <button>Complete Order</button>
            </div>
        </div>
    `;

    // Show the checkout by adding the 'visible' class
    checkout.classList.add('visible');
}

// Render the food list initially
renderFoodList(menuArray);

// Event listener for adding/removing items from the order
document.addEventListener("click", function(e) {
    // Add item to order when "+" button is clicked
    if (e.target.classList.contains("food-item-button")) {
        const foodId = e.target.dataset.id;
        const foodItem = menuArray.find(item => item.id == foodId);

        if (foodItem) {
            // Add the food item to the orderArray
            orderArray.push(foodItem);
            // Re-render the order in the checkout
            renderOrder(orderArray);
        }
    }

    // Handle removal of items from the order
    if (e.target.classList.contains("remove-item-btn")) {
        const foodId = e.target.dataset.id;
        const foodIndex = orderArray.findIndex(item => item.id == foodId);

        if (foodIndex > -1) {
            // Remove the item from the order array
            orderArray.splice(foodIndex, 1);
            // Re-render the order in the checkout
            renderOrder(orderArray);
        }
    }
});
