const ass = document.querySelector(".carousel");
const asd = document.querySelector(".small-box");
const arrowBtns = document.querySelectorAll(".wrapper span");
const Btns = document.querySelectorAll(".medium-box span");
const firstCardWidth = ass.querySelector(".card").offsetWidth;
const CardWidth = asd.querySelector(".tiny-box").offsetWidth;
const carouselChildrens = [...ass.children];
const Childrens = [...asd.children];

const open = document.getElementById('open');
const menu1 = document.getElementById('menu');
const close = document.getElementById('close');



let isDragging = false, startX, startScrollLeft;
let Dragging = false, startY, startScrollLeftt;

let cardPerView = Math.round(ass.offsetWidth / firstCardWidth);
let PerView = Math.round(asd.offsetWidth / CardWidth);



carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    ass.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    ass.insertAdjacentHTML("beforeend", card.outerHTML);
});

Childrens.slice(-PerView).reverse().forEach(cards => {
    asd.insertAdjacentHTML("afterbegin", cards.outerHTML);
});

Childrens.slice(0, PerView).reverse().forEach(cards => {
    asd.insertAdjacentHTML("beforeend", cards.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
    ass.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});

Btns.forEach(btns => {
    btns.addEventListener("click", () => {
    asd.scrollLeft += btns.id === "m" ? -CardWidth : CardWidth;
    });
});

const dragStartAss = (e) => {
    isDragging = true;
    ass.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = ass.scrollLeft;
};

const draggingAss = (e) => {
    if (!isDragging) return;
    ass.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStopAss = () => {
    isDragging = false;
    ass.classList.remove("dragging");
};

const dragStartAsd = (s) => {
    Dragging = true;
    asd.classList.add("dragging");
    startY = s.pageX;
    startScrollLeftt = asd.scrollLeft;
};

const draggingAsd = (s) => {
    if (!Dragging) return;
    asd.scrollLeft = startScrollLeft - (s.pageX - startY);
};

const dragStopAsd = () => {
    Dragging = false;
    asd.classList.remove("dragging");
};

const infiniteScrollAss = () => {
    if (ass.scrollLeft === 0) {
    ass.scrollLeft = 3.5 * ass.offsetWidth;
    } else if (Math.ceil(ass.scrollLeft) === ass.scrollWidth - ass.offsetWidth) {
    ass.scrollLeft = 1;
    }
};

const infiniteScrollAsd = () => {
    if (asd.scrollLeft === 0) {
    asd.scrollLeft = 3.5 * asd.offsetWidth;
    } else if (Math.ceil(asd.scrollLeft) === asd.scrollWidth - asd.offsetWidth) {
    asd.scrollLeft = 1;
    }
};

if(open){
    open.addEventListener('click', ()=>{
        menu1.classList.add('active')
    })
}

if(close){
    close.addEventListener('click', ()=>{
        menu1.classList.remove('active')
    })
}

ass.addEventListener("mousedown", dragStartAss);
ass.addEventListener("mousemove", draggingAss);
document.addEventListener("mouseup", dragStopAss);
ass.addEventListener("scroll", infiniteScrollAss);

asd.addEventListener("mousedown", dragStartAsd);
asd.addEventListener("mousemove", draggingAsd);
document.addEventListener("mouseup", dragStopAsd);
asd.addEventListener("scroll", infiniteScrollAsd);