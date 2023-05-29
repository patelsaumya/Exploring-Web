import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');

span.innerText = 'Can you clone me?';
div.append(span);

app.append(div);

const clone = div.cloneNode(); // only clones the top element
console.log(clone);
const newClone = div.cloneNode(true); // clones all the elements and subtrees
console.log(newClone);

app.append(clone);
app.append(newClone);