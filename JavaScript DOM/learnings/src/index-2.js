const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`; 

console.log(document);
console.dir(document.documentElement);

console.dir(document.head);
console.dir(document.body);

console.log(document.body.constructor.name);

console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof Node);
console.log(document.body instanceof EventTarget);

console.log(document.body.nodeType);
console.log(document.nodeType);
console.log(app.nodeType);

// nodeName for any Node types
console.log(document.body.nodeName);
console.log(document.nodeName);
console.log(app.nodeName);
// tagName for any Element types
console.log(document.body.tagName);
console.log(document.tagName);
console.log(app.tagName);