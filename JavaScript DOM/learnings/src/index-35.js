import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <select>
      <option value="">Select Your Drink...</option>
      <option value="lemonade" selected>Lemonade</option>
      <option value="cola">Cola</option>
      <option value="water">Water</option>
    </select>
  </form>
`;

const form = document.forms.example;
const select = form.elements.drink;

// 1. Selected Value
select.value = 'water';

// 2. Selected Index
const id = 2;
select.selectedIndex = id;

// 3. Selected DOM Element
console.log(select.options[select.selectedIndex]);

// 4. Events
select.addEventListener('change', () => {
  console.log(select.value);
  console.log(select.selectedIndex);
  console.log(select.options[select.selectedIndex]);
})

// 5. Add new <option>
const option = document.createElement('option');
option.value = 'milk';
option.text = 'Milk';

// select.append(option);
select.add(option, 1);