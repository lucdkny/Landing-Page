class SiteFooter extends HTMLElement {
  constructor() {
    super();

    this.button = this.querySelector('.js-toggle-button');
    console.log(this.button)
  }
}
customElements.define('site-footer', SiteFooter);

//Scroll to top

const goTopBtn = document.querySelector('.footer__button-text');

goTopBtn.addEventListener('click', () => {
  //"click" cho phần tử goTopBtn. Khi phần tử này được nhấp chuột, một hàm callback sẽ được gọi.
  
  window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
})

