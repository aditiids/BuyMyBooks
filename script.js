// script.js

let cart = JSON.parse(localStorage.getItem('cart')) || []; // Initialize cart from local storage

function addToCart(title, price) {
    cart.push({ title, price });

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${title} to the cart. Total Price: $${calculateTotal()}`);
}

function calculateTotal() {
    return cart.reduce((total, book) => total + book.price, 0).toFixed(2);
}

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

function searchBooks() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var books = document.getElementsByClassName("book");

    for (var i = 0; i < books.length; i++) {
        var bookTitle = books[i].getElementsByTagName("h2")[0].innerText.toLowerCase();
        if (bookTitle.includes(searchTerm)) {
            books[i].style.display = "block";
        } else {
            books[i].style.display = "none";
        }
    }
}
