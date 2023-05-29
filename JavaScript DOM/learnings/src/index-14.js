import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list">
    <li>Earth</li>
    <li>Fire</li>
    <li>Water</li>
    <li>Air</li>
  </ul>
`;

const listItems = document.querySelectorAll('#list li');
console.log(listItems);

for(let i=0; i < listItems.length; i++) {
  console.log(listItems[i]);
}

for (const item of listItems) {
  console.log(item);
}

[...listItems].forEach(item => console.log(item));

Array.from(listItems).forEach(item => console.log(item));