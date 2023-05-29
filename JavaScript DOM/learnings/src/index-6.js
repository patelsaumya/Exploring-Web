import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const data = ['Earth', 'Fire', 'Water', 'Air'];
const fragment = document.createDocumentFragment();
data.forEach(name => {
    const li = document.createElement('li');
    li.innerText = name;
    fragment.append(li);
})

app.append(fragment);