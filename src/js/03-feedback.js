refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
};
refs.form.addEventListener("submit", handleSubmit);
refs.textarea.addEventListener("input", handleInputTextarea);

populateTextarea();

function handleSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
}

function handleInputTextarea(event) {
  const message = event.currentTarget.value;
  localStorage.setItem("feedback-form-state", message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem("feedback-form-state");
  if (savedMessage) {
    console.log(savedMessage);
  }
  refs.textarea.value = savedMessage;
}
