document.addEventListener("DOMContentLoaded", function () {
    // Fetch book data from GitHub Gist (simulating dynamic data)
    fetch("https://api.github.com/gists/your-gist-id")
        .then(response => response.json())
        .then(data => {
            // Sort the books by title
            const sortedBooks = data.files.books.content.sort((a, b) => a.title.localeCompare(b.title));

            // Render books
            const booksContainer = document.getElementById("books");
            sortedBooks.forEach(book => {
                const bookElement = document.createElement("div");
                bookElement.className = "book";
                bookElement.innerHTML = `
                    <h2>${book.title}</h2>
                    <p>Author: ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                    <p>Cost: $${book.cost}</p>
                    <p>Book ID: ${book.bookID}</p>
                `;
                booksContainer.appendChild(bookElement);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
