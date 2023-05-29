const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`; 

const h1 = document.createElement('h1');
h1.innerText = 'Ultimate Courses';
h1.innerText += '\nLearning JS DOM';
// h1.style.display = 'none';

app.append(h1);
console.log(app.innerHTML);
console.log(app.innerText); // Elements
console.log(app.textContent); // Nodes
