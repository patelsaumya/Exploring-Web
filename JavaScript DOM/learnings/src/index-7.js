import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const i = document.createElement('i');
const b = document.createElement('b');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

div.append(span);
div.prepend(p);
p.before(i);
span.after(b);

// old way
i.parentNode.insertBefore(h1, i);
i.parentNode.insertBefore(h2, i.nextSibling);

console.log(div);   