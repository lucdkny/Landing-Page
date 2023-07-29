class SiteHeader extends HTMLElement {
  constructor() {
    super();

    this.button = this.querySelector('.js-toggle-button');
    console.log(this.button)
  }
}

customElements.define('site-header', SiteHeader);
