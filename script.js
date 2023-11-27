// Initialize cart from local storage or an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a book to the cart
function addToCart(title, price, bookId) {
    cart.push({ title, price, bookId });
    updateCart();
    alert(`Added ${title} to the cart. Total Price: ₹${calculateTotal()}`);
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, book) => total + book.price, 0).toFixed(2);
}

// Function to view the cart in a popup
function viewCart() {
    if (cart.length === 0) {
        console.log("Your cart is empty.");
    } else {
        let cartDetails = "Cart Details:\n";
        cart.forEach((book) => {
            cartDetails += `${book.title} - ₹${book.price}\n`;
        });
        cartDetails += `Total: ₹${calculateTotal()}`;

        createPopup(cartDetails);
    }
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector('.popup');
    document.body.removeChild(popup);
}

// Function to create a popup
function createPopup(content) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `<div class="popup-content">
                          <span class="close" onclick="closePopup()">&times;</span>
                          <p>${content}</p>
                          <button onclick="goToCheckout()">Go to Checkout</button>
                       </div>`;

    document.body.appendChild(popup);
}

// Function to update the cart in local storage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to go to the checkout page
function goToCheckout() {
    // Redirect to the checkout page
    window.location.href = 'checkout.html';
}

// Function to remove a book from the cart
function removeFromCart(bookId) {
    cart = cart.filter((book) => book.bookId !== bookId);
    updateCart();
    viewCart();
}

// Function to handle the checkout process
function checkout() {
    alert("Checkout functionality goes here!");
    // Add your checkout logic here (e.g., sending the order to a server, processing payment, etc.)
}

// Function to display order summary on the checkout page
function displayOrderSummary() {
    const orderSummaryElement = document.getElementById('orderSummary');
    if (cart.length === 0) {
        orderSummaryElement.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let orderDetails = '<p>Order Summary:</p>';
        cart.forEach((book) => {
            orderDetails += `<p>${book.title} - ₹${book.price}</p>`;
        });
        orderDetails += `<p>Total: ₹${calculateTotal()}</p>`;
        orderSummaryElement.innerHTML = orderDetails;
    }
}

// Function to submit the order
function submitOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to proceed to checkout.");
    } else {
        // Add your logic for submitting the order (e.g., sending data to a server)
        alert("Order submitted successfully!");

        // Clear the cart after submitting the order
        cart = [];
        updateCart();

        // Redirect to a thank you page or homepage
        window.location.href = 'thankyou.html';
    }
}

// Initialize the cart when the page loads
window.onload = function () {
    viewCart();
};

// Initialize the checkout page when it loads
if (window.location.pathname.includes('checkout.html')) {
    displayOrderSummary();
}
