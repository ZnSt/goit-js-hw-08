import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state";
const feedbackData = { message: "", email: "" };
const refs = {
  form: document.querySelector(".feedback-form"),
};
refs.form.addEventListener("submit", handleSubmit);
refs.form.addEventListener("input", throttle(updateDataInLocalStorage, 200));
function updateDataInLocalStorage(event) {
  feedbackData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackData));
}
function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(feedbackData);
}
function start() {
  let data = localStorage.getItem(STORAGE_KEY);
  if (!data) return;
  data = JSON.parse(data);
  const keys = Object.keys(data);
  keys.forEach((key) => (refs.form.elements[key].value = data[key]));
}
start();
