import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <input type="text"> <!--HTML Attributes-->
`;

const input = document.querySelector('input');
input.value = 2; // DOM JavaScript Properties
// input.setAttribute('value', 2);
console.log(parseInt(input.value, 10));
console.dir(input);