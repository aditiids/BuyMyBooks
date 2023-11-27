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
