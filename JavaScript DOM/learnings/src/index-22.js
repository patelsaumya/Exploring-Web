import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Click Me
  </button>
`;

const button = document.querySelector('button');

// Avoid, doesn't allow multiple events
button.onclick = function() {
  console.log('1');
};
button.onclick = function() {
  console.log('2');
};

function handleClick3(event) {
  console.log('3');
  console.log(this, event.target);
}

function handleClick4() {
  console.log('4');
}

button.addEventListener('click', handleClick3);
button.addEventListener('click', handleClick4);

button.addEventListener('dblclick', (event) => {
  console.log(this, event.target, 'Double-clicked!');
});