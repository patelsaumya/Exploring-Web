const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const text = document.createTextNode('DOM!');
const comment = document.createComment('No Comment');
div.append(comment);
div.append(text);
app.append(div);

console.log(app);
console.log(div);