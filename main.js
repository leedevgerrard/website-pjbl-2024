const contentBtn = document.querySelector('.js-content-btn');
const contentOptions = document.querySelector('.js-content-options');

contentBtn.addEventListener('click', () => {
  if(contentOptions.classList.contains('active-content-options')) {
    contentOptions.classList.remove('active-content-options');
    document.querySelectorAll('.content-li').forEach((li) => {
      li.classList.remove('active-content-li');
    })
  } else {
    contentOptions.classList.add('active-content-options');
    document.querySelectorAll('.content-li').forEach((li) => {
      li.classList.add('active-content-li');
    })
  }
})


const menuBar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const sideMenu = document.querySelector('.sidemenu');

menuBar.addEventListener('click', () => {
  sideMenu.style.right = "0";
})

xmark.addEventListener('click', () => {
  sideMenu.style.right = "-500px";
})