const burger = document.querySelector('.burger'),
      menu = document.querySelector('.nav'),
      overlay = document.querySelector('.header-overlay'),
      body = document.querySelector('body'),
      popapClose = document.querySelector('.popap__close'),
      popup = document.querySelector('.popap'),
      popapArea = document.querySelector('.popap__area'),
      btnPopup = document.querySelector('.btnPopup'),
      remove = document.querySelector('.first-screen__picture'),
      links = document.querySelectorAll('.nav__links');

const isPopap = (e) => {
    toggleIs();
};

burger.addEventListener('click', (e) => {
    toggle();
});

remove.addEventListener('click', (e) => {
    move();
});

btnPopup.addEventListener('click', (e) => {
    document.querySelector('.popap')
    toggleIs();
});

body.addEventListener('click', item => {
    if(item.target.classList.contains('header-overlay')) toggle();
});

links.forEach(item => {
    item.addEventListener('click', toggleRemove);
});

function toggle() {
    menu.classList.toggle('show');
    burger.classList.toggle('show');
    overlay.classList.toggle('show');
    body.classList.toggle('stop-scroll');
}

function toggleIs() {
    popapClose.classList.toggle('showIs');
    popup.classList.toggle('showIs');
    popapArea.classList.toggle('showIs');
}

function move() {
    remove.classList.toggle('remove');
}

function toggleRemove () {
    overlay.classList.remove('show');
    burger.classList.toggle('show');
    menu.classList.toggle('show');
    body.classList.remove('stop-scroll');
}

popapClose.addEventListener('click', isPopap);
popapArea.addEventListener('click', isPopap);




