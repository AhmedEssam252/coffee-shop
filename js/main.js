//global let
let navIcons = document.querySelectorAll('.svg');
let textIcons = document.querySelectorAll('#side-nav .icon span');
let nav = document.querySelector('nav');
let toggle = document.querySelector('.icon6');
let contentNav = document.querySelector('#content-nav');

//make toggle on nav
navIcons.forEach( icon =>icon.addEventListener('click', ()=>{ nav.classList.add('active'); contentNav.classList.add('active');}))
textIcons.forEach( text => text .addEventListener('click', ()=>{ nav.classList.add('active'); contentNav.classList.add('active'); }));

// if nav.active add active to nav , else remove active from nav
toggle.addEventListener('click', ()=>{
        nav.classList.toggle('active');
        if(nav.active){
            contentNav.classList.add('active');
        }else{
            contentNav.classList.remove('active')
        }
    }
);

// to change img when on click any list
function ChangeImg(img1) {
    document.querySelector('.menu1').src=img1;
    contentNav.classList.add('active');
};


// slider img
function sliderImg(x){
    document.querySelector('.show-drink').src = x;
};


let New = document.querySelector('#new-fun .new');

New.addEventListener('click',()=>{
    document.querySelector('#new').scrollIntoView({behavior:"smooth"})
})


function openBox(x){
    document.querySelector(`.box:not(#${x})`).style="transition: 1s ease-in-out;opacity:0;";
    document.querySelector('#enter-name').style="transition: 1s ease-in-out;opacity:0;";
    document.querySelector('.boxs h2').style="transition: 1s ease-in-out;opacity:0;";
    document.querySelector(`#${x}`).style="transform:translate(0%,-50%);transition: 1s ease-in-out;";
    // document.querySelector(`#${x}::after`).style="transform:translate(0%,-50%);transition: 1s 1s ease-in-out;";

    var element = document.querySelector(`#${x}`);
    var styles = window.getComputedStyle(element,':after')
    var content = styles['content'];
    content.style +="transform:translate(20px,20px);transition: 1s 1s ease-in-out;";
}

// openBox.then()=>{

// }
