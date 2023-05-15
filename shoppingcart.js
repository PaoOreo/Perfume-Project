let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Aqua De Gio',
        tag: 'Aqua De Gio',
        price: 100,
        inCart: 0
    },
    {
        name: 'Bvlgari Extreme',
        tag: 'Bvlgari Extreme',
        price: 100,
        inCart: 0
    },
    {
        name: 'David Off Cool Water',
        tag: 'David Off Cool Water',
        price: 100,
        inCart: 0
    },
    {
        name: 'Clinique Happy',
        tag: 'Clinique Happy',
        price: 100,
        inCart: 0
    },

    {
        name: 'Hugo Boss',
        tag: 'Hugo Boss',
        price: 100,
        inCart: 0
    },

    {
        name: 'Lacoste Red',
        tag: 'Lacoste Red',
        price: 100,
        inCart: 0
    },
    
    {
        name: 'Le Male',
        tag: 'Le Male',
        price: 100,
        inCart: 0
    },

    {
        name: 'Polo Sports',
        tag: 'Polo Sports',
        price: 100,
        inCart: 0
    },

    {
        name: 'CK One Shock',
        tag: 'CK One Shock',
        price: 100,
        inCart: 0
    },

    {
        name: 'James Bond',
        tag: 'James Bond',
        price: 100,
        inCart: 0
    },

    {
        name: 'Bvlgari Amethysts',
        tag: 'Bvlgari Amethysts',
        price: 100,
        inCart: 0
    },

    {
        name: 'David Off Cool water',
        tag: 'David Off Cool water',
        price: 100,
        inCart: 0
    },

    {
        name: 'Dolce & Gabbana - Light Blue',
        tag: 'Dolce & Gabbana - Light Blue',
        price: 100,
        inCart: 0
    },

    {
        name: 'Katty Perry Meow',
        tag: 'Katty Perry Meow',
        price: 100,
        inCart: 0
    },

    
    {
        name: 'Incanto Shine',
        tag: 'Incanto Shine',
        price: 100,
        inCart: 0
    },

    {
        name: 'Fantasy Britney Spears',
        tag: 'Fantasy Britney Spears',
        price: 100,
        inCart: 0
    },

    {
        name: 'Escada Taj Sunset',
        tag: 'Escada Taj Sunset',
        price: 100,
        inCart: 0
    },

    {
        name: 'Jo Malone Nectarine',
        tag: 'Jo Malone Nectarine',
        price: 100,
        inCart: 0
    },


    {
        name: 'Lacoste Touch Of Pink',
        tag: 'Lacoste Touch Of Pink',
        price: 100,
        inCart: 0
    },


    {
        name: 'Paris Hilton',
        tag: 'Paris Hilton',
        price: 100,
        inCart: 0
    },


    {
        name: 'Pink Chiffon BBW',
        tag: 'Pink Chiffon BBW',
        price: 100,
        inCart: 0
    },


    {
        name: 'Warm Vanilla BBW',
        tag: 'Warm Vanilla BBW',
        price: 100,
        inCart: 0
    },

    {
        name: 'Burburry Weekend',
        tag: 'Burburry Weekend',
        price: 100,
        inCart: 0
    },
    {
        name: 'Cucumber Melon BBW',
        tag: 'Cucumber Melon BBW',
        price: 100,
        inCart: 0
    },
    {
        name: 'Escada Moonsparkle',
        tag: 'Escada Moonsparkle',
        price: 100,
        inCart: 0
    },
    {
        name: 'Lanvin Eclat Darpege',
        tag: 'Lanvin Eclat Darpege',
        price: 100,
        inCart: 0
    },
    {
        name: 'Elizabeth Arden Green Tea',
        tag: 'Elizabeth Arden Green Tea',
        price: 100,
        inCart: 0
    },
    {
        name: 'Tommy Girl',
        tag: 'Tommy Girl',
        price: 100,
        inCart: 0
    },
    {
        name: 'VS Bombshel',
        tag: 'VS Bombshel',
        price: 100,
        inCart: 0
    },
    {
        name: 'Victoria Secret EU So Sexy',
        tag: 'Victoria Secret EU So Sexy',
        price: 100,
        inCart: 0
    },



];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    } 
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;

    }else{
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
    } 
}
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }   else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fa-solid fa-circle-xmark" style="color: #000000;"></i>
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}
            </div>
            <div class="quantity">
                <i class="fa-solid fa-plus" style="color: #050505;"></i>
                <span>${item.inCart}</span>
                <i class="fa-solid fa-minus" style="color: #0a0a0a;"></i>
            </div>
            <div class"total">
            ${item.inCart * item.price}
            </div>
            `;
        });

            productContainer.innerHTML += `
                <div class"basketTotalContainer">
                    <h4 class="basketTotalTitle">
                         Total
                    </h4>
                    <h4 class="basketTotal">
                        ${cartCost}
                    </h4>
                    </div>
            `;

    }       
}

//     if(cartCost != null){   
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price);
//     }else{

//     localStorage.setItem("totalCost", product.price);

//     }
// }

// function displayCart() {
//     let cartItems = localStorage.getItem("productInCart");
//     cartItems = JSON.parse(cartItems);
    

//     console.log(cartItems);
 
       

//     }

onLoadCartNumbers();
displayCart();