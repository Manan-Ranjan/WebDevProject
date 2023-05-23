

// Function to toggle the navigation menu
function toggleMenu() {
  var menu = document.querySelector('nav ul');
  menu.classList.toggle('show');
}

// Add a click event listener to the navigation menu button
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  
  // Get the values from the input fields
  var name = nameInput.value;
  var email = emailInput.value;
  
  // Perform validation or further processing
  
  // Reset the form
  event.target.reset();
}

// Add a submit event listener to the form
var form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
