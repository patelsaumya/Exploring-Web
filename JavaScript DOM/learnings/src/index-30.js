import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name
      <input type="text" name="fullname">
    </label>
    <label>
      Which pizza would you like?
      <select name="pizza">
        <option value="pepperoni">Pepperoni</option>
        <option value="meaty">Meaty</option>
        <option value="cheesey">Cheesey</option>
      </select>
    </label>
    <div>
      What size?
      <label>
        Small
        <input type="radio" name="size" value="small" checked>
      </label>
      <label>
        Medium
        <input type="radio" name="size" value="medium">
      </label>
      <label>
        Large
        <input type="radio" name="size" value="large">
      </label>
    </div>
    <label>
      Quantity
      <input type="number" name="quantity" value="1">
    </label>
    <button type="submit">
      Submit
    </button>
  </form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  // query string
  // Content-Type = application/x-www-form-urlencoded
  // fullname=Saumya%20Patel&pizza=pepperoni&size=large&quantity=2

  // const data = [...formData.entries];
  // const asString = data
  // .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
  // .join('&');
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);

  // json
  const asJson = JSON.stringify(Object.fromEntries(formData));
  console.log(asJson);
}

form.addEventListener('submit', handleSubmit);