class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      nav {
        background: #222;
        color: #fff;
        padding: 10px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 1em;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
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
