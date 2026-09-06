// ========================================
// SELECT HTML ELEMENTS
// ========================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");
const productResults = document.getElementById("productResults");


// ========================================
// FORM SUBMISSION
// ========================================

searchForm.addEventListener("submit", async function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get user input
    const searchTerm = searchInput.value.trim();


    // ========================================
    // EMPTY INPUT
    // ========================================

    if (searchTerm === "") {

        message.textContent = "Please enter a product name.";

        productResults.innerHTML = "";

        return;
    }


    // ========================================
    // LOADING
    // ========================================

    message.textContent = "Loading products...";

    productResults.innerHTML = "";


    try {

        // ========================================
        // CREATE SEARCH API URL
        // ========================================

        const API_URL =
            `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`;


        // ========================================
        // FETCH API
        // ========================================

        const response = await fetch(API_URL);


        // Check response

        if (!response.ok) {

            throw new Error("Failed to fetch products.");

        }


        // ========================================
        // CONVERT TO JSON
        // ========================================

        const data = await response.json();


        // Get products

        const products = data.products;


        // ========================================
        // CHECK NO RESULTS
        // ========================================

        if (products.length === 0) {

            message.textContent =
                `No products found for "${searchTerm}".`;

            return;
        }


        // ========================================
        // FILTER
        // ========================================

        const filteredProducts = products.filter(function (product) {

            return product.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());

        });


        // ========================================
        // MAP
        // ========================================

        const productHTML = filteredProducts.map(function (product) {

            return `
                <article class="product-card">

                    <img
                        src="${product.thumbnail}"
                        alt="${product.title}"
                    >

                    <h2>${product.title}</h2>

                    <p>
                        Category: ${product.category}
                    </p>

                    <p>
                        Rating: ⭐ ${product.rating}
                    </p>

                    <p>
                        Stock: ${product.stock}
                    </p>

                    <p class="price">
                        $${product.price}
                    </p>

                </article>
            `;

        }).join("");


        // ========================================
        // DISPLAY
        // ========================================

        productResults.innerHTML = productHTML;


        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        message.textContent =
            `${filteredProducts.length} product(s) found.`;


    } catch (error) {

        console.error(error);

        message.textContent =
            "Something went wrong. Please try again.";

        productResults.innerHTML = "";

    }

});