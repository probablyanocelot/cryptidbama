class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  
  connectedCallback() {
    this.innerHTML = `
   
    <header class="main-banner">
        <div class="banner-content">
            <h1 class="cryptid-title">ALABAMA CRYPTIDS</h1>
            <p class="cryptid-subtitle">Uncovering the Unseen in the Heart of Dixie</p>
        </div>
    </header>
    
    <nav>
      <ul>
        <li><a href="/cryptidbama/index.html">HOME</a></li>
        <li><a href="/cryptidbama/pages/cryptidfaq.html">What's A Cryptid?</a></li>
        <li class="dropdown">
          <a href="/cryptidbama/pages/famouscryptids.html">Famous Cryptids ▾</a>
          <ul class="dropdown-menu">
            <li><a href="/cryptidbama/pages/ufo.html">UFO</a></li>
            <li><a href="/cryptidbama/pages/whitethang.html">White Thang</a></li>
            <li><a href="/cryptidbama/pages/leprechaun.html">Leprechaun</a></li>
          </ul>
        </li>
        <li><a href="/cryptidbama/pages/contact.html">Contact</a></li>
      </ul>
    </nav>`;
  }
}

customElements.define("navbar-component", Navbar);
