import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Close Me
  </button>
`;

const button = document.querySelector('button');

// SET
button.setAttribute('aria-label', 'Close this Modal');

// GET
const value = button.getAttribute('aria-label');
console.log(value);

// .attributes
console.log(button.attributes['aria-label']);