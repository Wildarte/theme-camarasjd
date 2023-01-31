const open_search = document.querySelector('.btn_search.open_search');
const search_over = document.querySelector('.search_over');
const btn_slose_search = document.getElementById('btn_slose_search');
const hero_top = document.querySelector('.hero_top');
const float_btn_up = document.querySelector('.float_btn_up');
const hero_slide_uni = document.querySelectorAll('.hero_slide_uni');

open_search.addEventListener('click', () => {

    search_over.classList.add('open_search');

});

btn_slose_search.addEventListener('click', () => {

    search_over.classList.remove('open_search');

});


//========================== scroll menu header =============================
document.addEventListener('scroll', (e) => {

    let hw = window.scrollY;

    let height_header = hero_top.getBoundingClientRect().height;

    if(hw > 200){
        hero_top.classList.add('over_hero_top');
        document.body.style.marginTop = height_header+"px";
        float_btn_up.classList.add('show_btn_up');
    }else{
        hero_top.classList.remove('over_hero_top');
        document.body.style.marginTop = "0px";
        float_btn_up.classList.remove('show_btn_up');
    }

});

float_btn_up.addEventListener('click', () => {

    window.scrollTo(0,0)

});

if(hero_slide_uni){


    let uni = 0;

    setInterval(function(){
        hero_slide_uni.forEach((item) => {
            item.classList.remove('hero_slide_uni_active');    
        })
        hero_slide_uni[uni].classList.add('hero_slide_uni_active');
        uni += 1;
        if(uni == hero_slide_uni.length){
            uni = 0
        }
    }, 5000);




}

//==================== btns control menu access ==================================
const btn_mob_access = document.querySelector('.btn_mob_access');
const menu_access = document.querySelector('.barra_header_left ul#accessibility');
const close_menu_access = document.querySelector('.close_menu_access');
const head_menu_access = document.querySelector('.head_menu_access');
const menu_dub = document.querySelector('.menu_dub');
const btn_open_menu_main = document.querySelector('.btn_open_menu_main');

btn_mob_access.addEventListener('click', () => {
    menu_access.classList.add('open_menu_access');
    head_menu_access.classList.add('open_head_menu_access');
});
close_menu_access.addEventListener('click', () => {
    menu_access.classList.remove('open_menu_access')
    head_menu_access.classList.remove('open_head_menu_access');
    menu_dub.classList.remove('open_menu_sobre');
    head_menu_access.classList.remove('open_head_menu_access_bg_white');
});
btn_open_menu_main.addEventListener('click', () => {
    menu_dub.classList.add('open_menu_sobre');
    head_menu_access.classList.add('open_head_menu_access_bg_white');
});
//==================== btns control menu access ==================================


//=========================== control submenu mobile ================================
const itens_submenu = document.querySelectorAll('.has-submenu');

itens_submenu.forEach((item) => {

    item.addEventListener('click', () => {

        if(item.querySelector('.submenu').classList.contains('open_submenu')){
            item.querySelector('.submenu').classList.remove('open_submenu');
        }else{
            item.querySelector('.submenu').classList.add('open_submenu');
        }

    });

});
//=========================== control submenu mobile ================================



//============================== control menu itens bottom hero ====================================
const btn_head_header_bottom = document.querySelector('.btn_head_header_bottom');
const menu_itens_bottom_hero = document.querySelector('.header_bottom ul');
const count_height_itens = document.querySelectorAll('.header_bottom ul li');

let h_itens = 0;

for(let n = 0; n < count_height_itens.length; n++){
    h_itens = h_itens + count_height_itens[n].getBoundingClientRect().height;
}

btn_head_header_bottom.addEventListener('click', () => {
    if(menu_itens_bottom_hero.classList.contains('open_header_bottom')){
        menu_itens_bottom_hero.classList.remove('open_header_bottom');
        menu_itens_bottom_hero.style.height = "0px"
    }else{
        menu_itens_bottom_hero.classList.add('open_header_bottom');
        menu_itens_bottom_hero.style.height = h_itens+"px";
    }
});
//============================== control menu itens bottom hero ====================================