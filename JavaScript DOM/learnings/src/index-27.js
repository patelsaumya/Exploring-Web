import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div style="height: 1000px;"></div>
`;

document.addEventListener('keydown', event => {
  // console.log(event.key, event.code);
  switch(event.key) {
    case 'ArrowUp': {
      console.log('Up!');
      event.preventDefault(); // not scrolling up
      break;
    }
    case 'ArrowDown': {
      console.log('Down!');
      event.preventDefault();
      break;
    }
  }
});

document.addEventListener('keyup', event => console.log(event.key));
document.addEventListener('keydown', event => console.log(event.key));