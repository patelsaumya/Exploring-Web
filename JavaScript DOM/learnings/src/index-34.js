import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <label>
      Accept Marketing
      <input type="checkbox" name="marketing" value="yes">
    </label>
  </form>
`;

const form = document.forms.example;
const checkbox = form.elements.marketing;

// 1. Properties that are useful
// set
checkbox.checked = true;
// get
console.log(checkbox.checked);

// 2. Events
checkbox.addEventListener('change', () => {
  console.log(checkbox.checked);
  console.log(checkbox.value);
})

// 3. Methods
checkbox.select();