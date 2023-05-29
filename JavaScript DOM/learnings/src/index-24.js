import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div class="one">
    <div class="two">
      <button type="button" class="three">
        Click Me
      </button>
    </div>
  </div>
`;

// Events Propogation (Down): Top of DOM tree -> Target Node: Capturing Phase
// Event Reached Target Node: Target Phase
// Events Propogation (Up): Target Node -> Top Of DOM tree: Bubbling Phase

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

function handleClick(event) {
  event.stopPropagation(); // stops event from bubbling up, but allows other event listeners(for the same event (Eg: click)) on the target element to fire
  // event.stopImmediatePropagation(); // stops event from bubbling up, and also stops other event listeners(for the same event (Eg: click)) on the target element to fire
  console.log(this, event.target);
}

// receiveEventInCapturingPhase: false is default. Default is receiveEventInBubblingPhase.
one.addEventListener('click', handleClick, false);
two.addEventListener('click', handleClick);
three.addEventListener('click', handleClick);

three.addEventListener('click', event => console.log(event), {capture: true});