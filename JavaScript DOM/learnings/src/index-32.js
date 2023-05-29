import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <input type="text" name="myInput" value="Hello">
  </form>
`;

const form = document.forms.example;
const input = form.elements.myInput;

// 1. Properties that are useful
console.dir(input);
// set
input.value = 'Goodbye';
// input.disabled = true;
// input.readOnly = true;
// get
console.log(input.value);

// 2. Events
// other events: cut, copy, paste
input.addEventListener('focus', () => console.log('Focus'));
input.addEventListener('blur', () => console.log('Blur'));
input.addEventListener('input', () => console.log('Input'));
input.addEventListener('change', () => console.log('Change'));

// 3. Methods
// focus an input
input.focus();
setTimeout(() => input.blur(), 2500);