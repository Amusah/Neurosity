const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelector('a');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle')
});

/*
@-moz-document url-prefix() {
  header nav .nav-links .arrow, header nav .nav-links span {
    font-size: 2.2rem;
    padding: 0.2rem 0 0.1rem 0.25rem;
  }
}
*/