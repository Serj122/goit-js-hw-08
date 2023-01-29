import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

reloadPage();

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

function storageFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formData);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function reloadPage() {
  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  }
}
