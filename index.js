const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelector('a');
const body = document.getElementsByTagName('body')[0];
//console.log(body);

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
});


window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
      if(nav.classList.contains('nav-open')){
        nav.classList.remove('nav-open');
        burger.classList.remove('toggle');
      }
  }
});


const getMousePosition = () => {
  let xPos = 0;
  window.addEventListener('mousemove', e => {
    xPos =  e.clientX;
  });

  return () => {
    console.log(xPos);
    if(xPos < 540 && nav.classList.contains('nav-open')){
      console.log(true);
      nav.classList.remove('nav-open');
      burger.classList.remove('toggle');
    }
  };
}
const handleClick = getMousePosition();
window.addEventListener('click', handleClick);
/*
@-moz-document url-prefix() {
  header nav .nav-links .arrow, header nav .nav-links span {
    font-size: 2.2rem;
    padding: 0.2rem 0 0.1rem 0.25rem;
  }
}
*/