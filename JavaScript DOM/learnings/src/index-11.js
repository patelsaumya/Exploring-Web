import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div1 = document.createElement('div');
div1.innerText = 'I am Message 1';

const div2 = document.createElement('div');
div2.innerText = 'I am Message 2';

app.append(div1);
app.append(div2);

setTimeout(() => {
    div1.remove();
}, 2500);


// old way

setTimeout(() => div2.parentNode.removeChild(div2), 2500);