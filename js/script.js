const iconMenu = document.getElementById('icon-menu');
const navbarOne = document.getElementById('navbar-one');
const navbarTwo = document.getElementById('navbar-two');
const itemsNavbar = document.getElementById('items');

function changeIcon(){
    if(iconMenu.innerHTML === '☰'){
        iconMenu.innerHTML = '&times;'
        iconMenu.classList.add('size-icon')
    }else{
        iconMenu.innerHTML = '☰';
        iconMenu.classList.remove('size-icon')
    }
}

function effectMenuLeft(ele){
    ele.classList.toggle('left-ocult')
    ele.classList.toggle('left-visible');
}

function effectMenuRight(ele){
    ele.classList.toggle('right-ocult');  
    ele.classList.toggle('right-visible');
}

function effectItems(ele){
    setTimeout(()=>{
        ele.classList.toggle('items');  
        ele.classList.toggle('items-show');
    },200)
}

function showMenu(){
    effectMenuLeft(navbarOne)
    effectMenuRight(navbarTwo)
    effectItems(itemsNavbar)

    changeIcon();
}

function scrollSmooth(){
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

iconMenu.addEventListener('click', showMenu);

navbarOne.addEventListener('click', showMenu)
navbarTwo.addEventListener('click', showMenu)

itemsNavbar.addEventListener('click', (evt)=>{

    if(evt.target.localName === 'span' || evt.target.localName === 'a'){
        showMenu();
    }else{
        return;
    }

})

// zoom images

mediumZoom('.zoom-image', {
    margin: 50,
    background: '#332d26'
})

// add filter

document.addEventListener('DOMContentLoaded', ()=>{

    const allImg = [...document.querySelectorAll('img')];

    allImg.forEach(ele=> ele.classList.add('blured'));

    setTimeout(()=>{
        allImg.forEach(ele=> ele.classList.remove('blured'));
    },500)

})

//scroll top, polyfill for edge

document.getElementById('btn-top').addEventListener('click', scrollSmooth );
