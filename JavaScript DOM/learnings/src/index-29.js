import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name
      <input type="text" name="fullname">
    </label>
    <label>
      Which pizza would you like?
      <select name="pizza">
        <option value="pepperoni">Pepperoni</option>
        <option value="meaty">Meaty</option>
        <option value="cheesey">Cheesey</option>
      </select>
    </label>
    <button type="submit">
      Submit
    </button>
  </form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  console.log('Hi from handleSubmit');
  // console.log(event.target);
  // console.log([...new FormData(event.target)]);
  console.log(new FormData(event.target));
  console.log('Bye from handleSubmit');
}

function handleFormData(event) {
  console.log('Hi from handleFormData');
  console.log([...event.formData]);
  console.log([...event.formData.values()]);
  const entries = event.formData.entries();
  for (const entry of entries) {
    console.log(entry);
  }
  console.log('Bye from handleFormData');
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('formdata', handleFormData);