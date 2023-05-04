const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const submitButton = document.querySelector('button[type="submit"]');
setInterval(() => {
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  const formData = { 
    email: emailValue, 
    message: messageValue 
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state')
  document.querySelector(".feedback-form").reset();
})

if (localStorage) {
  const feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = feedbackForm.email;
  messageInput.value = feedbackForm.message;
}