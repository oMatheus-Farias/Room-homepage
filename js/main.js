const $topHeader = document.querySelector('.container-hearder');
const $nav = document.querySelector('.nav');

const $btnHamburguerMenu = document.querySelector('.hamburguer-icon');
const $btnCloseMenu = document.querySelector('.close-icon');

init();
$nav.style.display = 'flex';

function init(){
    $nav.style.display = 'none';
    $nav.style.transform = 'translateY(-22em)';
    $topHeader.style.display = 'flex';
};

$btnHamburguerMenu.addEventListener('click', openMenu);
$btnCloseMenu.addEventListener('click', closeMenu);

function openMenu(){
    $nav.style.transform = 'translateY(-9.6em)';
};

function closeMenu(){
    $nav.style.transform = 'translateY(-22em)';
};