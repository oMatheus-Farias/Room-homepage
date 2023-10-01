const $topHeader = document.querySelector('.container-hearder');
const $nav = document.querySelector('.nav');
const $btnHamburguerMenu = document.querySelector('.hamburguer-icon');
const $btnCloseMenu = document.querySelector('.close-icon');
const $actionSlydeContainer = document.querySelector('.btns-actionSlyde-container');

init();
$nav.style.display = 'flex';

function init(){
    $nav.style.display = 'none';
    $nav.style.transform = 'translateY(-22em)';
    $btnCloseMenu.removeAttribute('style');
    $topHeader.style.display = 'flex';
    $actionSlydeContainer.style.display = 'flex';
};

$btnHamburguerMenu.addEventListener('click', openMenu);
$btnCloseMenu.addEventListener('click', closeMenu);

function openMenu(){
    $nav.style.transform = 'translateY(-9.6em)';
};

function closeMenu(){
    $nav.style.transform = 'translateY(-22em)';
};