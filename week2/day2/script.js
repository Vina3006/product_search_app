const products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },

    {
        name: "Phone",
        price: 30000,
        category: "Electronics"
    },

    {
        name: "Shoes",
        price: 2000,
        category: "Fashion"
    },

    {
        name: "Headphones",
        price: 3000,
        category: "Electronics"
    },

    {
        name: "Backpack",
        price: 1500,
        category: "Accessories"
    }
];




const calculateTotal = (products) => {

    let total = 0;

    for (let product of products) {
        total = total + product.price;
    }

    return total;
};




const totalPrice = calculateTotal(products);

console.log("Total Price:", totalPrice);



const { name, price } = products[0];

console.log("Product Name:", name);
console.log("Product Price:", price);