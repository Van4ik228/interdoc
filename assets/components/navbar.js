class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        h1 {
          color: red;
        }
      </style>
      <h1>Hello, World!</h1>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

module.exports = Navbar