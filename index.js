const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelector('a');
const body = document.getElementsByTagName('body')[0];

// showing and hiding side menu with burger icon
burger.addEventListener('click', () => {
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
