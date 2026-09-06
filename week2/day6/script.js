const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productResults = document.getElementById("productResults");
const message = document.getElementById("message");



const API_URL = "https://dummyjson.com/products";



async function fetchProducts() {

    try {

        message.textContent = "Loading products...";

        const response = await fetch(API_URL);

        
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

       
        const data = await response.json();

        console.log(data);

       
        renderProducts(data.products);

    } catch (error) {

        console.error(error);

        message.textContent = "Something went wrong while loading products.";
    }
}



function renderProducts(products) {

    productResults.innerHTML = "";

    if (products.length === 0) {

        message.textContent = "No products found.";

        return;
    }

    message.textContent = `Showing ${products.length} products`;

    const productHTML = products.map(function(product) {

        return `
            <article class="product-card">

                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                >

                <h2>${product.title}</h2>

                <p>${product.description}</p>

                <p class="price">
                    Price: $${product.price}
                </p>

                <p class="rating">
                    ⭐ Rating: ${product.rating}
                </p>

            </article>
        `;

    }).join("");

    productResults.innerHTML = productHTML;
}


async function searchProducts() {

    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {

        fetchProducts();

        return;
    }

    try {

        message.textContent = "Searching...";

        const response = await fetch(
            `https://dummyjson.com/products/search?q=${searchTerm}`
        );

        if (!response.ok) {
            throw new Error("Search failed");
        }

        const data = await response.json();

        renderProducts(data.products);

    } catch (error) {

        console.error(error);

        message.textContent = "Unable to search products.";
    }
}


searchButton.addEventListener("click", searchProducts);



searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});


// Load products when page opens
fetchProducts();