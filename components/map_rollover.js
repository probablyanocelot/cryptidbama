class MapRollover extends HTMLElement {
  constructor() {
    super();
    this.hoveredHotspot = null;
  }

  connectedCallback() {
    this.innerHTML = `
        <div
          class="areaOverlay"
          data-hotspot="ufo"
          style="clip-path: polygon(39.2% 29.2%, 29.2% 29.0%, 20.1% 29.0%, 18.5% 26.9%, 22.9% 21.5%, 28.6% 19.3%, 32.9% 15.5%, 39.2% 15.0%, 43.6% 16.3%, 48.6% 17.2%, 54.3% 18.0%, 57.1% 19.6%, 54.9% 22.3%, 51.9% 23.6%, 47.1% 25.6%, 40.3% 28.4%)"
          aria-label="UFO"
          title="UFO"
          onclick="window.location.href='/cryptidbama/pages/ufo'"
        ></div>

        <div
          class="areaOverlay"
          data-hotspot="white"
          style="clip-path: polygon(44.0% 58.7%, 42.9% 60.2%, 44.2% 62.1%, 42.1% 63.0%, 39.5% 64.9%, 37.1% 62.8%, 35.8% 59.3%, 36.6% 54.8%, 38.6% 50.1%, 42.5% 46.0%, 48.2% 40.8%, 51.4% 37.6%, 53.6% 31.9%, 57.1% 29.2%, 61.5% 27.6%, 68.2% 27.2%, 73.4% 30.0%, 78.2% 31.9%, 82.4% 34.5%, 86.3% 38.8%, 86.7% 43.2%, 87.2% 47.7%, 84.6% 52.2%, 79.1% 53.9%, 74.7% 50.7%, 75.6% 46.4%, 76.5% 54.1%, 77.1% 58.2%, 64.3% 62.8%, 57.5% 54.4%, 53.6% 52.6%, 50.1% 55.0%, 48.6% 56.9%)"
          aria-label="White Thang"
          title="White Thang"
          onclick="window.location.href='/cryptidbama/pages/white-thang'"
        ></div>

        <div
          class="areaOverlay"
          data-hotspot="lep"
          style="clip-path: polygon(29.0% 81.9%, 18.3% 82.4%, 17.7% 80.4%, 17.0% 76.1%, 14.4% 72.5%, 15.5% 69.4%, 17.0% 67.5%, 16.1% 63.4%, 19.0% 59.3%, 26.4% 58.7%, 34.4% 61.0%, 37.9% 64.1%, 44.2% 62.6%, 48.2% 62.8%, 51.4% 69.4%, 34.0% 71.6%, 33.6% 75.1%, 29.4% 77.0%, 30.3% 80.9%)"
          aria-label="Leprechaun"
          title="Leprechaun"
          onclick="window.location.href='/cryptidbama/pages/leprechaun'"
        ></div>
    `;
  }
}

customElements.define("rollover-component", MapRollover);
