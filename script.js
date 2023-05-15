// Get the form element
const form = document.querySelector("form");

// Add an event listener to the form submit button
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form values
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Display an alert message with the form values
  alert(
    `Thank you for your message, ${name}! We will get back to you soon.\n\nEmail: ${email}\nMessage: ${message}`
  );

  // Reset the form
  form.reset();
});
