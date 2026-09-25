let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Untuk mengubah ikon menu
    navbar.classList.toggle('active'); // Untuk mengaktifkan navbar
};