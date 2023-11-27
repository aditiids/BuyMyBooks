// script.js

// Initialize cart from local storage or an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to initialize the cart and view it
function initCart() {
    // If the cart is empty, initialize it with an empty array
    if (!cart || cart.length === 0) {
        cart = [];
    }

    // Save the initial or updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // View the cart details
    viewCart();
}

// Function to add a book to the cart
function addToCart(title, price) {
    cart.push({ title, price });

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${title} to the cart. Total Price: $${calculateTotal()}`);
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, book) => total + book.price, 0).toFixed(2);
}

// Function to view the cart
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartDetails = "Cart Details:\n";
        cart.forEach((book) => {
            cartDetails += `${book.title} - $${book.price}\n`;
        });
        cartDetails += `Total: $${calculateTotal()}`;
        alert(cartDetails);
    }
}

// Initialize the cart when the page loads
window.onload = function () {
    initCart();
};
