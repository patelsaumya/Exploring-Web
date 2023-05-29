import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul>
    <li>1</li>
  </ul>
`;

const ul = app.querySelector('ul');

ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');
ul.insertAdjacentHTML('afterbegin', '<li>First</li>');
ul.insertAdjacentHTML('beforeend', '<li>Last</li>');
ul.insertAdjacentHTML('afterend', '<p>After</p>');