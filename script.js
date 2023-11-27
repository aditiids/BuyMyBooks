// script.js

// Initialize cart from local storage or an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a book to the cart
function addToCart(title, price, bookId) {
    cart.push({ title, price });

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Add bookId to the cart item for identification
    cart[cart.length - 1].bookId = bookId;

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
            cartDetails += `${book.title} - $${book.price} 
                <button onclick="removeFromCart('${book.bookId}')">Remove</button>\n`;
        });
        cartDetails += `Total: $${calculateTotal()}`;
        cartDetails += `\n<button onclick="checkout()">Checkout</button>`;
        alert(cartDetails);
    }
}

// Function to remove a book from the cart
function removeFromCart(bookId) {
    cart = cart.filter((book) => book.bookId !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
}

// Function to handle the checkout process
function checkout() {
    alert("Checkout functionality goes here!");
    // Add your checkout logic here (e.g., sending the order to a server, processing payment, etc.)
}

// Initialize the cart when the page loads
window.onload = function () {
    viewCart();
};

// Initialize the cart when the page loads
window.onload = function () {
    initCart();
};
