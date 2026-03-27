class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style src="../styles/navbar.module.css" />
    <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="../pages/page2.html">Page 2</a></li>
        <li><a href="../pages/page3.html">Page 3</a></li>
        <li><a href="../pages/page4.html">Page 4</a></li>
        <li><a href="../pages/page5.html">Page 5</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-component", Navbar);
