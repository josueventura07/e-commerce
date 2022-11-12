import { dataItems } from "./js/data.js";
const contentItems = document.querySelector("#items");
const iconCart = document.querySelector("#icon_cart");
const contentCart = document.querySelector("#content_cart");
const iconCartClose = document.querySelector("#icon_cart-close");
const contentMenu = document.querySelector("#menu");
const iconMenu = document.querySelector("#menu_show");
const iconMenuClose = document.querySelector("#icon_menu-close");
const showHome = document.querySelector("#show_home");
const showProducts = document.querySelector("#show_products");
const navBar = document.querySelector("#navbar");
const cartBody = document.querySelector("#cart_body");
const totalCart = document.querySelector(".total_Shopping");
const iconDarkMode = document.querySelector('.bx-moon');
const bodyDarkMode = document.querySelector('.dark_mode'); 
const menu = document.querySelectorAll('.menu_highligter')

menu.forEach((element, i) => {
    menu[i].addEventListener('click', () => {
        
        menu.forEach((element, i) => {
          menu[i].classList.remove('menu_highligter-active')
          console.log(menu)
        });

        menu[i].classList.add('menu_highligter-active')
        console.log(menu)
    });
});

let html = "";
let cart = {};

dataItems.forEach(({id, name, urlImages, price, stock}) => {
    html += `
        <div class="items_box" id="${id}">
            <div class="img-sample">
                <img class="items-img" src="${urlImages}" alt="${name}">
            </div>

            <div class="items-details">
                <div class="items-info" id="card_body">
                    <h2>Price: $${price}</h2>
                    <span class="font-family line-division">Stock: ${stock}</span>
                </div>

                <h1 class="font-family items-info">${name}</h1>

            </div>

            
                <i class='bx bx-plus-medical  cursor-pointer'></i>
            

        </div>
    `;
});

contentItems.innerHTML = html;

function printItemsInCart() {
    
    let html = "";
    
    const arrayCart = Object.values(cart);

    arrayCart.forEach(({id, name, urlImages, price, amount}) => {
        html += `

            
            <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${urlImages}" alt="">
                </div>
                <div class="item_cart_details">
                    <h4 class="item_cart-title">${name}</h4>
                    <span>Price: $${price}</span>
                    <div class="item_cart-options" id="${id}">
                        <i class='bx bx-minus-circle'></i>
                        <span id="amount">${amount}</span>
                        <i class='bx bx-plus-circle'></i>
                        <i class='bx bx-trash'></i>    
                    </div>
                </div>
            </div>
            
        `
    })
    cartBody.innerHTML = html;
}   

contentItems.addEventListener('click', (e) => {
    if(e.target.classList.contains("bx-plus-medical")) {
        
        const idItem = +e.target.parentElement.id
        const findItem = dataItems.find((item) => item.id === idItem);

        if(cart[idItem]) {
            cart[idItem].amount++
        } else {
            cart[idItem] = findItem;
            cart[idItem].amount = 1
        }
        
        
    }

    printCounterCart();
    printTotal();
    printItemsInCart();
})

function printTotal() {
    const totalCartArray = Object.values(cart)

    let sum = 0

    totalCartArray.forEach((e) => {
        sum += e.amount * e.price
    })

    totalCart.textContent = sum;
}

cartBody.addEventListener('click', (e) => {
    if(e.target.classList.contains('bx-minus-circle')) {
    const idItems = +e.target.parentElement.id;
    cart[idItems].amount--;
    }

    if(e.target.classList.contains('bx-plus-circle')) {
    const idItems = +e.target.parentElement.id;
    cart[idItems].amount++;
    }

    if(e.target.classList.contains('bx-trash')) {
    const idItems = +e.target.parentElement.id;
    delete cart[idItems]

    
    }
    
    printCounterCart();
    printTotal();
    printItemsInCart();
});

function printCounterCart() {
    
    const counterCart = document.querySelector('.counter_cart')

    counterCart.textContent = Object.values(cart).length;

}



window.addEventListener('scroll', (e) => {
    if(window.scrollY >= 80) {
        navBar.classList.add('nav')
    } else {
        navBar.classList.remove('nav')
    }
});



iconCart.addEventListener('click', (e) => {
    contentCart.classList.toggle("content_cart-show");
})

iconCartClose.addEventListener('click', (e) => {
    contentCart.classList.toggle("content_cart-show")
} )

iconMenu.addEventListener('click', (e) => {
    contentMenu.classList.toggle("menu_show")
})

iconMenuClose.addEventListener('click', (e) => {
    contentMenu.classList.toggle("menu_show")
 })

 showHome.addEventListener('click', (e) => {
    contentItems.classList.toggle("show_home")
 })

 showProducts.addEventListener('click', (e) => {
    contentItems.classList.toggle("show_home")
 })


 showHome.addEventListener('click', (e) => {
    contentMenu.classList.toggle("menu_show")
 })

 showProducts.addEventListener('click', (e) => {
    contentMenu.classList.toggle("menu_show")
 })

 iconDarkMode.addEventListener('click', (e) => {
    bodyDarkMode.classList.toggle('dark_mode');
})