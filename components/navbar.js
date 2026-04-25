class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
    const prefix = window.location.pathname.includes('/pages/') ? '../' : './';

    this.innerHTML = `
    <nav>
      <ul>
        <li><a href="${prefix}index.html">HOME</a></li>
        <li><a href="${prefix}pages/cryptidfaq.html">What's A Cryptid?</a></li>
        
        <li class="dropdown">
          <a href="${prefix}pages/famouscryptids.html">Famous Cryptids ▾</a>
          <ul class="dropdown-menu">
            <li><a href="${prefix}pages/ufo.html">UFO</a></li>
            <li><a href="${prefix}pages/whitethang.html">White Thang</a></li>
            <li><a href="${prefix}pages/leprechaun.html">Leprechaun</a></li>
          </ul>
        </li>
        
        <li><a href="${prefix}pages/contact.html">Contact</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-component", Navbar);
