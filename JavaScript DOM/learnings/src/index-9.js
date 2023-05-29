import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div>
    Replace me!
  </div>
`;

const div = app.querySelector('div');

const newDiv = document.createElement('div');
newDiv.innerText = 'I have been replaced!';

div.replaceWith(newDiv);

// old way
const anotherDiv = document.createElement('div');
anotherDiv.innerText = 'I replace all';

setTimeout(() => {
    newDiv.parentNode.replaceChild(anotherDiv, newDiv);
}, 2000);