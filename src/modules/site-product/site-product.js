class SiteProduct extends HTMLInputElement {
  constructor() {
    super();
    this.button = this.querySelector('.js-toggle-button')
    console.log(this.button)
  }
}
customElements.define('site-product', SiteProduct)