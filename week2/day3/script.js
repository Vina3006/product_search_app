const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const greeting = document.getElementById("greeting");


userForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = nameInput.value;

    const email = emailInput.value;

    greeting.textContent = `Hello ${name}! Your email is ${email}.`;

});