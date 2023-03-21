//  toogle class active
const nav = document.querySelector
('.nav');
// ketika di klik
document.querySelector('#hamburger-menu').onclick = () => {
    nav.classList.toggle('active');

};