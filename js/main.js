// main.js


//로그인메뉴 토글
const login_icon = document.querySelector(".login_icon");
const login = document.querySelector(".login");
login_icon.addEventListener("click", e=>{
    login.classList.toggle("on");
})
//회사소개메뉴 토글
const company_text = document.querySelector(".company_text");
const company = document.querySelector(".company");
company_text.addEventListener("click", e => {
    company.classList.toggle("on");
})

// 메인gnb 
const mainGnb = document.querySelectorAll("nav.gnb>ul>li");
const header_wrap = document.querySelector(".header_wrap"); 
const gnb_area = document.querySelectorAll(".gnb_area");

const subMenu = document.querySelectorAll("div.gnb_area>ul>li>a");
const product = document.querySelectorAll(".product");

for(let i=0;i<mainGnb.length;i++){
    mainGnb[i].addEventListener("mouseover", e =>{
        e.preventDefault();
        mainGnb.forEach(item => {
            item.classList.remove("on")
        })
        mainGnb[i].classList.add("on")
        let height = e.currentTarget.children[1].offsetHeight;
        header_wrap.style.height = 105 + height + `px`; 
    })
    gnb_area[i].addEventListener("mouseout", e=>{
        mainGnb.forEach(item => {
            item.classList.remove("on")
        })
        header_wrap.style.height = `105px`; 
    })
}

//제품,소모품 sub
for(let i=0;i<subMenu.length;i++){
    subMenu[i].addEventListener("mouseover",e => {
        e.preventDefault();
        product.forEach(item => {
            item.classList.remove("on")
        })
        product[i].classList.add("on")
    })
}


//탑버튼 스크롤
const serviceBtn = document.querySelector(".service");
const topBtn = document.querySelector(".top");

window.addEventListener("scroll", e =>{
    let scroll = document.querySelector("html").scrollTop;
    if(scroll > 210){
        serviceBtn.classList.add("on")
        topBtn.classList.add("on")
    }else{
        serviceBtn.classList.remove("on")
        topBtn.classList.remove("on")
    }
})

serviceBtn.addEventListener("click", e => {
    serviceBtn.classList.toggle("click")
})

topBtn.addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

//매인배너
const next = document.querySelector(".btn_next");
const prev = document.querySelector(".btn_prev");

const bannerSec = document.querySelectorAll(".section_frame>section");
const current = document.querySelector(".current")
let bnnNum = 0;
let lastNum = bannerSec.length - 1;

next.addEventListener("click", e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    for(let i=0;i<bannerSec.length;i++){
        bannerSec.forEach(item => {
            item.classList.remove("active")
        })
    }
    bannerSec[bnnNum].classList.add("active")
    current.innerHTML = bnnNum+1;
})

prev.addEventListener("click", e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum = lastNum;
    for(let i=0;i<bannerSec.length;i++){
        bannerSec.forEach(item => {
            item.classList.remove("active")
        })
    }
    bannerSec[bnnNum].classList.add("active")
    current.innerHTML = bnnNum+1;
})
//비디오재생
const videobtn = document.querySelector(".videobtn");
const videobtnpause = document.querySelector(".videobtnpause");
const video = document.querySelector("video")

videobtn.addEventListener("click",e=>{
    video.play();
    videobtn.style.display = "none"
    videobtnpause.style.display = "block"
})
videobtnpause.addEventListener("click",e=>{
    e.preventDefault();
    video.pause();
    videobtn.style.display = "block"
    videobtnpause.style.display = "none"
})
    


//content3 클릭이벤트
const content3_bestlanktab = document.querySelectorAll(".content3_bestlanktab>ul>li");
const content3_bestlanklist = document.querySelectorAll(".content3_bestlanklist>ol");

for(let i=0;i<content3_bestlanktab.length;i++){
   content3_bestlanktab[i].addEventListener("click", e=>{
    e.preventDefault();
    content3_bestlanktab.forEach(item =>{
        item.classList.remove("on")
    })
    e.currentTarget.classList.toggle("on")

    content3_bestlanklist.forEach(item =>{
        item.classList.remove("on")
    })
    content3_bestlanklist[i].classList.add("on")
}) 
}

//content4 클릭이벤트 
const product4_next = document.querySelector(".content4 a.next");
const product4_prev = document.querySelector(".content4 a.prev");
const content4_prodect = document.querySelector("ul.content4_prodect");


product4_next.addEventListener("click", e=>{
    e.preventDefault();
    content4_prodect.classList.add("next") 
    e.currentTarget.style.display = "none"
    product4_prev.style.display = "block"
})
product4_prev.addEventListener("click", e=>{
    e.preventDefault();
    content4_prodect.classList.remove("next") 
    e.currentTarget.style.display = "none"
    product4_next.style.display = "block"
})

//content6 클릭이벤트
const product6_next = document.querySelector(".content6 a.next");
const product6_prev = document.querySelector(".content6 a.prev");
const content6_prodect = document.querySelector(".content6_content>ul");

product6_next.addEventListener("click", e => {
    e.preventDefault();
    content6_prodect.classList.add("next")
    e.currentTarget.style.display = "none";
    product6_prev.style.display = "block";
})
product6_prev.addEventListener("click", e =>{
    e.preventDefault();
    content6_prodect.classList.remove("next")
    e.currentTarget.style.display = "none";
    product6_next.style.display = "block";
})

//content8 클릭이벤트
const product8_next = document.querySelector(".content8 a.next");
const product8_prev = document.querySelector(".content8 a.prev");
const content8_prodect = document.querySelector(".content8_content>ul");

product8_next.addEventListener("click", e=>{
    e.preventDefault();
    content8_prodect.classList.add("next");
    e.currentTarget.style.display = "none"
    product8_prev.style.display = "block"
})
product8_prev.addEventListener("click", e=>{
    e.preventDefault();
    content8_prodect.classList.remove("next");
    e.currentTarget.style.display = "none"
    product8_next.style.display = "block"
})

//footer 클릭이벤트
const footer_select = document.querySelector(".footer_select>a")
const footer_list = document.querySelector(".footer_select>ul")
footer_select.addEventListener("click", e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on")
    footer_list.classList.toggle("on")
})

//모바일햄버거버튼
const mo_btn_ham = document.querySelector("dd.moblie_ham>a>img");
const mo_mainGnb = document.querySelector("nav.gnb_mo");

mo_btn_ham.addEventListener("click", e => {
    e.preventDefault();
    mo_mainGnb.classList.add("on");
})

//모바일 스크롤이벤트
const mo_loginBox = document.querySelector("nav.gnb_mo .login")

window.addEventListener("scroll", e => {
    let mo_scroll = document.querySelector("html").scrollTop;
    if(mo_scroll>0){
        mo_loginBox.classList.add("shadow")
    }else{
        mo_loginBox.classList.remove("shadow")
    }
})

//모바일 클로즈버튼
const mo_close = document.querySelector("nav.gnb_mo .close")
mo_close.addEventListener("click" , e => {
    e.preventDefault();
    mo_mainGnb.classList.remove("on")
})

//모바일 gnb클릭이벤트
const subMenu_lists_title = document.querySelectorAll("ul.sub_mo>li>p")
const subMenu_lists =  document.querySelectorAll("ul.sub_mo>li")

for(let i=0;i<subMenu_lists_title.length;i++){   
    subMenu_lists_title[i].addEventListener("click", () => {
        subMenu_lists[i].classList.toggle("on")
    })
}

