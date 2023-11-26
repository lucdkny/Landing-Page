class SiteProducts extends HTMLElement {
  constructor () {
    super();
    this.button = this.querySelector('.js-toggle-button');
    console.log(this.button);
  }
}
customElements.define('site-products', SiteProducts);