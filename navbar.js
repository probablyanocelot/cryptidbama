class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./page2/index.html">Page 2</a></li>
        <li><a href="./page3/index.html">Page 3</a></li>
        <li><a href="./page4/index.html">Page 4</a></li>
        <li><a href="./page5/index.html">Page 5</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-component", Navbar);
