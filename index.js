const nav = document.querySelector('.nav-links');
const navbar = document.querySelector('.nav-bar');
const burger = document.querySelector('.burger');
const links = nav.querySelector('a');
const body = document.getElementsByTagName('body')[0];

// showing and hiding side menu with burger icon
burger.addEventListener('click', () => {
  console.log('clicked');
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
});

// Hiding side menu with the escape key
window.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
      if(nav.classList.contains('nav-open')){
        nav.classList.remove('nav-open');
        burger.classList.remove('toggle');
      }
  }
});

// Hide side menu when a position outside the side menu is clicked
const getMousePosition = () => {
  let xPos = 0;
  window.addEventListener('mousemove', e => {
    xPos =  e.clientX;
  });

  return () => {
    //console.log(xPos);
    if(xPos < 540 && nav.classList.contains('nav-open')){
      //console.log(true);
      nav.classList.remove('nav-open');
      burger.classList.remove('toggle');
    }
  };
}
const handleClick = getMousePosition();
window.addEventListener('click', handleClick);

// Change navbar color on scroll
window.onscroll = () => {
  document.body.scrollTop > 25 || 
  document.documentElement.scrollTop > 25 ?
  navbar.classList.add('nav-bg-color') :
  navbar.classList.remove('nav-bg-color');
};