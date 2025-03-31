/* <h2>Your order</h2>

<div class="orders">
<p class="ordered-items" id="ordered-items">${name}</p><button class="remove" id="remove">remove</button>
<p class="ordered-price" id="ordered-price">${price}</p>
</div>

<div class="total">
<p class="total-price" id="total-price">Total price:</p>
<p class="total-usd" id="total-usd">$${total}</p>
</div>

<div>
<button class="order-btn" id="order-btn">Complete order</button>
</div>

</section>`;
            return orderHTML;
        });
containerMenu.innerHTML += orderHTML; */




//     menuArray.map(orders => {
//     const{ name, ingredients, id, price, emoji } = order

    

// let orderRender =[]
// orderRender.push(orders)































// function createMenu(menuArray){
//     let menuHTML = '';
//     menuArray.forEach(menu => {
//         const {name, ingredients,id, price, emoji} = menu;
//         menuHTML += 
//         ` <section class="menu-item">   
//         <p class="menu-emoji">${emoji}</p>  
//           <ul class="menu"> 
//                    <li class="name"><p>${name}</p></li>
//                   <li class="ingredients"><p>${ingredients.join(', ')}</p></li>
//                     <li class="price"><p>${price}</p></li>
//             </ul> 
//               <div>
//                  <button class="menu-btn" id="menu-btn">+</button>
//          </section>;`
//     })
//     return menuHTML;
// }`













// //function createMenu(menuArray){
//   // return menuArray.map(menu => {
//     //const {name, ingredients,id, price, emoji} = menu;
//     //return ` <section class="menu-item">   
//       //      <p class="menu-emoji">${emoji}</p>  
//         //    <ul class="menu"> 
//           //          <li class="name"><p>${name}</p></li>
//             //        <li class="ingredients"><p>${ingredients.join(', ')}</p></li>
//               //      <li class="price"><p>${price}</p></li>
//            // </ul> 
//              //   <div>
//                //     <button class="menu-btn" id="menu-btn">+</button>
//          //</section>`;
//    // }).join('');
// //}
//containerMenu.innerHTML = createMenu();


// function addToOrder(id){
//     const menuItem = menuArray.find(item =>item.id === id);
// if (menuItem) {
//     orders.push(menuItem);
//     updateOrderHTML();
//   }
// }
   
// function updateOrderHTML(){
//     let orderHTML='';
//     let total=0;

   
//     orders.forEach(order,index => {
//         const {name, price} = order;
//         total += price
//         orderHTML += 
//         `<section class="order">
//            <h2>Your order</h2>
//            <div class="orders">
//                <p class="ordered-items" id="ordered-items">${name}</p><button class="remove" id="remove" data-remove="${index}">remove</button>
//                <p class="ordered-price" id="ordered-price">${price}</p>
//            </div>
//            <div class="total">
//                <p class="total-price" id="total-price">Total price:</p>
//                <p class="total-usd" id="total-usd">$${total}</p>
//            </div>
//            <div>
//                <button class="order-btn" id="order-btn" data-complete="">Complete order</button>
//            </div>
//        </section>`;
       
// })
// containerMenu.innerHTML = orderHTML;
// }

// updateOrderHTML()




    




