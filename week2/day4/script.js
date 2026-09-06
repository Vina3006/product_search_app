

import { products } from "./products.js";



const studentName = "Vina";
const course = "BCA";

const welcomeMessage = `Hello ${studentName}! Welcome to ${course}.`;

console.log(welcomeMessage);



const user = {
    name: "Vina",
    address: {
        city: "Pune"
    }
};

console.log(user?.address?.city);




const productsUnder1000 = products.filter(product => {
    return product.price < 1000;
});

console.log("Products under ₹1,000:");
console.log(productsUnder1000);




const productNames = productsUnder1000.map(product => {
    return product.name;
});

console.log("Product names:");
console.log(productNames);




const totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total price:");
console.log(`₹${totalPrice}`);



const foundProduct = products.find(product => {
    return product.name === "Mouse";
});

console.log("Found product:");
console.log(foundProduct);




console.log("All products:");

products.forEach(product => {
    console.log(product.name);
});




const output = document.getElementById("output");

output.innerHTML = `
    <h3>Products Under ₹1,000</h3>

    <ul>
        ${productNames.map(name => `<li>${name}</li>`).join("")}
    </ul>

    <h3>Total Price of All Products</h3>

    <p>₹${totalPrice}</p>

    <h3>Found Product</h3>

    <p>${foundProduct?.name}</p>

    <h3>Student Information</h3>

    <p>${welcomeMessage}</p>

    <p>City: ${user?.address?.city}</p>
`;