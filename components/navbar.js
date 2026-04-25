class Navbar extends HTMLElement {
  constructor() {
    super();
  }

 connectedCallback() {
    this.innerHTML = `
    <nav>
      <ul>
        <li><a href="./index.html" class="active">HOME</a></li>
        <li><a href="../pages/page2.html">PAGE 2</a></li>
        
        <li class="dropdown">
          <a href="../pages/page3.html">PAGE 3 ▾</a>
          <ul class="dropdown-menu">
            <li><a href="../pages/page3-sub1.html">CRYPTID LIST</a></li>
            <li><a href="../pages/page3-sub2.html">SIGHTINGS MAP</a></li>
            <li><a href="../pages/page3-sub3.html">SUBMIT EVIDENCE</a></li>
          </ul>
        </li>
        
        <li><a href="../pages/page4.html">PAGE 4</a></li>
        <li><a href="../pages/page5.html">PAGE 5</a></li>
      </ul>
    </nav>`;
  }
  }

customElements.define("navbar-component", Navbar);
