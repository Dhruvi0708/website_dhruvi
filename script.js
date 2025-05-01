const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

openBtn.addEventListener("click", () => {
  navMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

let cart = [];
let totalAmount = 0;

function addOrderToCart() {
  const dishSelect = document.getElementById("dish");
  const dishName = dishSelect.value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseInt(dishSelect.options[dishSelect.selectedIndex].dataset.price);

  if (!dishName) {
    alert("Please select a dish!");
    return;
  }

  cart.push({ dishName, quantity, price });
  totalAmount += price * quantity;
  displayCart();
}

function displayCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";

  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `<p>${item.quantity} x ${item.dishName} - ₹${item.price * item.quantity} 
    <button onclick="removeFromCart(${index})">Remove</button></p>`;
  });

  document.getElementById("total-amount").textContent = totalAmount;
}

function removeFromCart(index) {
  totalAmount -= cart[index].price * cart[index].quantity;
  cart.splice(index, 1);
  displayCart();
}

function placeOrder() {
  const customerName = document.getElementById("customer-name").value;
  const phone = document.getElementById("phone").value;

  if (!customerName || !phone) {
    alert("Please enter your name and phone number before placing an order.");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert(`Thank you ${customerName}! Your order has been placed successfully.`);
  // Optionally: Reset everything
  cart = [];
  totalAmount = 0;
  displayCart();
  document.querySelector(".order-form").reset();
}

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if(name && email && message) {
    alert("Thank you for contacting us, " + name + "!");
    // Optional: Send data to a server or process it here
    contactForm.reset(); // Reset the form after submission
  } else {
    alert("Please fill in all fields.");
  }
});


