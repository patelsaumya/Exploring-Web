import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Add Item
  </button>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
`;

const button = document.querySelector('button');
const list = document.querySelector('#list');
// const items = [...list.querySelectorAll('li')];

function handleClick(event) {
  if(event.target.nodeName.toLowerCase() !== 'li') {
    return;
  }
  console.log(event.target.innerText);
}

list.addEventListener('click', handleClick);

// function handleClick(event) {
//   console.log(event.target.innerText);
// }

// items.forEach(item => {
//   item.addEventListener('click', handleClick);
// })

button.addEventListener('click', () => {
  const items = list.querySelectorAll('li');
  const li = document.createElement('li');
  li.innerText = `Item ${items.length+1}`;
  // li.addEventListener('click', handleClick);
  list.append(li);
})