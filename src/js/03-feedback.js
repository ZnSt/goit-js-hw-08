const refs = {
  input: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
};

refs.input.addEventListener("submit", handleInput);
refs.textarea.addEventListener("input", handleTextarea);

onTextareapopulate();

function handleInput(event) {
  event.preventDefault();

  event.currentTarget.reset();
}

function handleTextarea(event) {
  const message = event.currentTarget.value;
  localStorage.setItem("feedback-form-state", message);
}

function onTextareapopulate() {
  const savedMessage = localStorage.getItem("feedback-form-state");
}
// 1 считать данные с localStorage
// 2 сделать проверку(если данных нет в localStorage то мы выходим из функции иначе мы парсим эти данные и добавляем значения нашим полям формы)
