import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <div class="container">
      <label>
        Blue
        <input type="radio" name="color" value="blue">
      </label>
      <label>
        Red
        <input type="radio" name="color" value="red" checked>
      </label>
      <label>
        Green
        <input type="radio" name="color" value="green">
      </label>
    </div>
  </form>
`;

const form = document.forms.example;
const radios = Array.from(form.elements.color);

// 1. Properties that are useful
radios[0].checked = true;
radios.forEach(radio => {
  console.log(radio.value);
  console.log(radio.checked);
});

// 2. Events
const container = form.querySelector('.container');
container.addEventListener('change', () => {
  // const checked = radios.find(radio => radio.checked).value;
  // console.log(checked);
  console.log(form.elements.color.value);
})

// 3. Methods
radios[2].select();