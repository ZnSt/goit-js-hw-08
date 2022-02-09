import throttle from "lodash.throttle";
const formInputRef = document.querySelector(".feedback-form");

formInputRef.addEventListener("submit", onFormSubmit);
formInputRef.addEventListener("input", throttle(onTextareaInput, 500));

const dataLS = localStorage.getItem("feedback-form-state");

if (dataLS) {
  const data = JSON.parse(dataLS);
  formInputRef.elements.email.value = data.email;
  formInputRef.elements.message.value = data.message;
}

function onTextareaInput(event) {
  const formData = {
    email: formInputRef.elements.email.value,
    message: formInputRef.elements.message.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const resultData = localStorage.getItem("feedback-form-state");

  console.log(JSON.parse(resultData));
  event.target.reset();

  localStorage.removeItem("feedback-form-state");
}
