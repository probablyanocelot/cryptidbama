class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  
connectedCallback() {
  this.innerHTML = `
    <nav>
      <ul>
        <li><a href="../index.html">HOME</a></li>
        <li><a href="./cryptidfaq.html">What's A Cryptid?</a></li>
        <li class="dropdown">
          <a href="./famouscryptids.html">Famous Cryptids ▾</a>
          <ul class="dropdown-menu">
            <li><a href="./ufo.html">UFO</a></li>
            <li><a href="./whitethang.html">White Thang</a></li>
            <li><a href="./leprechaun.html">Leprechaun</a></li>
          </ul>
        </li>
        <li><a href="./contact.html">Contact</a></li>
      </ul>
    </nav>`;
}
  }

customElements.define("navbar-component", Navbar);
