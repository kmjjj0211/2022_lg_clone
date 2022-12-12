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

