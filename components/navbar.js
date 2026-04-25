class Navbar extends HTMLElement {
  constructor() {
    super();
  }

 connectedCallback() {
    this.innerHTML = `
    <nav>
      <ul>
        <li><a href="cryptidbama/index.html" class="active">HOME</a></li>
        <li><a href="cryptidbama/pages/cryptidfaq.html">What's A Cryptid?</a></li>
        
        <li class="dropdown">
          <a href="cryptidbama/pages/famouscryptids.html">Famous Cryptids ▾</a>
          <ul class="dropdown-menu">
            <li><a href="cryptidbama/pages/ufo.html">UFO</a></li>
            <li><a href="cryptidbama/pages/whitethang.html">White Thang</a></li>
            <li><a href="cryptidbama/pages/leprechaun.html">Leprechaun</a></li>
          </ul>
        </li>
        
        <li><a href="cryptidbama/pages/contact.html">Contact</a></li>
      </ul>
    </nav>`;
  }
  }

customElements.define("navbar-component", Navbar);
