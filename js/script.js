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

itemsNavbar.addEventListener('click', (evt)=>{

    if(evt.target.localName === 'span' || evt.target.localName === 'a'){
        effectMenuLeft(navbarOne)
        effectMenuRight(navbarTwo)
        effectItems(itemsNavbar)
        changeIcon();
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


    //-------------------------------------- change image card share twitter --------------------

    let images = [
        'https://web.archive.org/web/20171229004408im_/http://artpassions.net/galleries/dore/paradiso34x.jpg',
        'https://www.gutenberg.org/files/8710/8710-h/images/019.jpg',
        'https://www.gutenberg.org/files/8710/8710-h/images/082.jpg',
        'https://web.archive.org/web/20171229001849im_/http://artpassions.net/galleries/dore/raven/raven12_lattice.jpg',
        'http://enciclopedia.us.es/images/e/e2/Don_Quijote_en_batalla_con_un_molino_de_viento_%28Dor%C3%A9%29.jpg',
        'https://web.archive.org/web/20171229002707im_/http://artpassions.net/galleries/dore/destruction_of_leviathan.jpg',
        'https://ia800904.us.archive.org/BookReader/BookReaderImages.php?zip=/22/items/illustration_Gustave_Dore/Gustave_Dore_jp2.zip&file=Gustave_Dore_jp2/Gustave_Dore_0000.jp2&scale=2&rotate=0',
        'https://ia803101.us.archive.org/32/items/KingArthurAndCamelotCastle_201805/King_Arthur_and_Camelot_Castle.jpg'
    ];

    let randomNumber = Math.floor(Math.random() * images.length);
    let randomImage = images[randomNumber];

    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageTwitter = document.querySelector('meta[name="twitter:image"]');

    ogImage.attributes[1].value = randomImage;
    ogImageTwitter.attributes[1].value = randomImage;
})

//scroll top, polyfill for edge

document.getElementById('btn-top').addEventListener('click', scrollSmooth );

