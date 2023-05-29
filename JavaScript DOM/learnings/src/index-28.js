import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name
      <input type="text" name="fullname">
    </label>
  </form>
`;

// const form = document.querySelector('form');
const form = document.forms.order;
const fullname = form.elements.fullname;

function handleInput(event) {
  // access the value
  console.log(event.target.value);

  // access the form
  console.log(event.target.form);
}

fullname.addEventListener('input', handleInput);
// fullname.addEventListener('change', handleInput);