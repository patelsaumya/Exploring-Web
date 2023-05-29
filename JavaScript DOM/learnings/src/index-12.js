import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list"></ul>
`;

const data = ['Earth', 'Fire', 'Water'];
const fragment = document.createDocumentFragment();

data.forEach(item => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = item;
  fragment.append(li);
});

// getElementById: returns HTMLElement
const ulFromId = document.getElementById('list');
console.log(ulFromId.innerHTML);
console.log(ulFromId);
ulFromId.append(fragment);

// HTMLCollection can only contain Element nodes, so we can't have text nodes or other kind of DOM nodes in it.

// getElementsByClassName: returns HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName);

// getElementsByTagName: returns HTMLCollection
const listItemsFromTagName = ulFromId.getElementsByTagName('li');
console.log(listItemsFromTagName);

// Demonstrate live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromId.append(newListItem);

// No need to query again!
console.log(listItemsFromClassName);
console.log(listItemsFromTagName);