// Get the orderSummary element
const orderSummaryElement = document.getElementById('orderSummary');

// Function to display cart details in the order summary
function displayCartDetails() {
    // Clear the existing content
    orderSummaryElement.innerHTML = '';

    // Check if the cart is not empty
    if (cart.length > 0) {
        // Loop through the items in the cart and display details
        cart.forEach((book) => {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'cart-item';

            // Display book image
            const bookImage = document.createElement('img');
            bookImage.src = `images/${book.bookId}.jpg`; // Assuming bookId matches the image filename
            bookImage.alt = `${book.title} Image`;
            bookDiv.appendChild(bookImage);

            // Display book details
            const bookDetails = document.createElement('div');
            bookDetails.className = 'book-details';
            bookDetails.innerHTML = `
                <p>${book.title}</p>
                <p>Price: ₹${book.price}</p>
            `;
            bookDiv.appendChild(bookDetails);

            // Add a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removeFromCart(book.bookId);
            bookDiv.appendChild(removeButton);

            // Append the bookDiv to orderSummary
            orderSummaryElement.appendChild(bookDiv);
        });
    } else {
        // If the cart is empty, display a message
        orderSummaryElement.innerHTML = '<p>Your cart is empty.</p>';
    }
}

// Call the displayCartDetails function when the page loads
window.onload = function () {
    displayCartDetails();
};

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
// Initialize the cart when the page loads
window.onload = function () {
    // The viewCart function is not needed on page load
    // If needed, you can call viewCart() here
};

// Initialize the checkout page when it loads
if (window.location.pathname.includes('checkout.html')) {
    displayOrderSummary();
}
