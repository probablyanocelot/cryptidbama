class Navbar extends HTMLElement {
  constructor() {
    super();
  }

 connectedCallback() {
  this.innerHTML = `
<nav>
  <ul>
    <li><a href="/index.html" class="active">HOME</a></li>
    <li><a href="/pages/cryptidfaq.html">What's A Cryptid?</a></li>
    <li class="dropdown">
        <a href="/pages/famouscryptids.html">Famous Cryptids ▾</a>
        <ul class="dropdown-menu">
            <li><a href="/pages/ufo.html">UFO</a></li>
            <li><a href="/pages/whitethang.html">White Thang</a></li>
            <li><a href="/pages/leprechaun.html">Leprechaun</a></li>
        </ul>
    </li>
    <li><a href="/pages/contact.html">Contact</a></li>
  </ul>
</nav>`;
  }
  }

customElements.define("navbar-component", Navbar);
