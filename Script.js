// 1. Flower products
let flowers = [
    {
        id: 1,
        name: "Red Roses",
        price: 15,
        image: "🌹"
    },
    {
        id: 2,
        name: "Pink Tulips",
        price: 12,
        image: "🌷"
    },
    {
        id: 3,
        name: "White Lilies",
        price: 18,
        image: "💐"
    },
    {
        id: 4,
        name: "Sunflowers",
        price: 14,
        image: "🌻"
    }
];

// 2. Shopping cart
let cart = [];

// 3. Display flowers on the website
function displayFlowers() {

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    flowers.forEach(function(flower) {

        container.innerHTML += `
            <div class="card">

                <div class="flower">${flower.image}</div>

                <h3>${flower.name}</h3>

                <p class="price">$${flower.price}</p>

                <button onclick="addToCart(${flower.id})">
                    🛒 Add to Cart
                </button>

            </div>
        `;
    });
}

// 4. Add a flower to the cart
function addToCart(id) {

    let flower = flowers.find(function(item) {
        return item.id === id;
    });

    cart.push(flower);

    displayCart();
}

// 5. Display cart and calculate total
function displayCart() {

    let cartItems = document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    cart.forEach(function(flower, index) {

        total += flower.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                <span>
                    ${flower.image} ${flower.name}
                    - $${flower.price}
                </span>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

// 6. Remove a flower from the cart
function removeFromCart(index) {

    cart.splice(index, 1);

    displayCart();
}

// 7. Checkout
function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        let total = 0;

        cart.forEach(function(flower) {
            total += flower.price;
        });

        alert("Thank you for shopping! Total: $" + total);

        cart = [];

        displayCart();
    }
}

// 8. Start the website
displayFlowers();
displayCart();
