const open_search = document.querySelector('.btn_search.open_search');
const search_over = document.querySelector('.search_over');
const btn_slose_search = document.getElementById('btn_slose_search');
const hero_top = document.querySelector('.hero_top');
const float_btn_up = document.querySelector('.float_btn_up');


open_search.addEventListener('click', () => {

    search_over.classList.add('open_search');

});

btn_slose_search.addEventListener('click', () => {

    search_over.classList.remove('open_search');

});

document.addEventListener('DOMContentLoaded', () => {

    let height_top = document.querySelector('.barra_header_topo').getBoundingClientRect().height;
    let hero = document.querySelector('.hero');

    if(!window.matchMedia('(max-width: 820px)').matches){
        
        console.log(height_top);
    
        hero.style.height = "calc(100vh)";
        hero.style.marginTop = "-"+height_top+"px";

    }else{
        hero.style.marginTop = "-"+(height_top+15)+"px";
        hero.style.height = "calc(100vh)";
    }

});

//========================== scroll menu header =============================
const sobre_menu = document.querySelector('.sobre_menu');
document.addEventListener('scroll', (e) => {

    if(!sobre_menu.classList.contains('open_menu_sobre')){
        let hw = window.scrollY;

        let height_header = hero_top.getBoundingClientRect().height;
    
        if(hw > 200){
            hero_top.classList.add('over_hero_top');
            document.body.style.marginTop = height_header+"px";
            float_btn_up.classList.add('show_btn_up');
            menu_access.classList.remove('open_menu_access');
            menu_access.style.marginTop = 0
        }else{
            hero_top.classList.remove('over_hero_top');
            document.body.style.marginTop = "0px";
            float_btn_up.classList.remove('show_btn_up');
        }
    }

});

float_btn_up.addEventListener('click', () => {

    window.scrollTo(0,0)

});


//=========================== slide hero ================================

const hero_slide_uni = document.querySelectorAll('.slide_single');
const dots_slide_hero = document.querySelectorAll('.count_dot_slide');
const info_slide_single = document.querySelectorAll('.info_slide_single');
let uni = 0;
let uni2 = 0;
if(hero_slide_uni){

    setInterval(function(){
        hero_slide_uni.forEach((item) => {
            item.classList.remove('hero_slide_uni_active');    
        });
        dots_slide_hero.forEach((item) => {
            item.classList.remove('count_dot_slide_active');
        })

        hero_slide_uni[uni].classList.add('hero_slide_uni_active');
        dots_slide_hero[uni].classList.add('count_dot_slide_active');
        uni += 1;
        if(uni == hero_slide_uni.length){
            uni = 0
        }
    }, 6000);

    setInterval(function(){

        info_slide_single.forEach((item) => {
            item.querySelector('h2').classList.remove('animate__zoomInDown');
        });

        info_slide_single.forEach((item) => {
            if(item.querySelector('h3')){
                item.querySelector('h3').classList.remove('animate__slideInUp');
            }
        });
        info_slide_single.forEach((item) => {
            if(item.querySelector('a.link_slide_single')){
                item.querySelector('a.link_slide_single').classList.remove('animate__slideInUp');
            }
        });

        if(info_slide_single[uni2].querySelector('h3')){
            info_slide_single[uni2].querySelector('h3').classList.add('animate__slideInUp');
        }
        if(info_slide_single[uni2].querySelector('a.link_slide_single')){
            info_slide_single[uni2].querySelector('a.link_slide_single').classList.add('animate__slideInUp');
        }
        info_slide_single[uni2].querySelector('h2').classList.add('animate__zoomInDown');
        uni2 += 1;
        if(uni2 == info_slide_single.length){
            uni2 = 0
        }
    }, 3000);

}
/*
dots_slide_hero.forEach((item, index) => {

    uni = index;

    item.addEventListener('click', () => {
        hero_slide_uni.forEach((item) => {
            item.classList.remove('hero_slide_uni_active');    
        });
        dots_slide_hero.forEach((item) => {
            item.classList.remove('count_dot_slide_active');
        });
        info_slide_single.forEach((item) => {
            item.querySelector('h2').classList.remove('animate__zoomInDown');
        });
        info_slide_single.forEach((item) => {
            if(item.querySelector('h3')){
                item.querySelector('h3').classList.remove('animate__slideInUp');
            }
        });
        info_slide_single.forEach((item) => {
            if(item.querySelector('a.link_slide_single')){
                item.querySelector('a.link_slide_single').classList.remove('animate__slideInUp');
            }
        });

        if(info_slide_single[uni].querySelector('h3')){
            info_slide_single[uni].querySelector('h3').classList.add('animate__slideInUp');
        }
        if(info_slide_single[uni].querySelector('a.link_slide_single')){
            info_slide_single[uni].querySelector('a.link_slide_single').classList.add('animate__slideInUp');
        }
        info_slide_single[uni].querySelector('h2').classList.add('animate__zoomInDown');
        hero_slide_uni[uni].classList.add('hero_slide_uni_active');
        dots_slide_hero[uni].classList.add('count_dot_slide_active');

        console.log('uni: '+uni);

    });

});
*/
//=========================== slide hero ================================



//==================== btns control menu access ==================================
const btn_mob_access = document.querySelector('.btn_mob_access');
const menu_access = document.querySelector('.barra_header_left ul#accessibility');
const close_menu_access = document.querySelector('.close_menu_access');
const head_menu_access = document.querySelector('.head_menu_access');
const menu_dub = document.querySelector('.menu_dub');
const btn_open_menu_main = document.querySelector('.btn_open_menu_main');

btn_mob_access.addEventListener('click', () => {
    if(menu_access.classList.contains('open_menu_access')){
        menu_access.classList.remove('open_menu_access');
        menu_access.style.marginTop = 0
    }else{
        let h_top = document.querySelector('.hero_top').getBoundingClientRect().height;
        menu_access.style.marginTop = h_top+"px";
        menu_access.classList.add('open_menu_access');
    }

    //head_menu_access.classList.add('open_head_menu_access');
});
close_menu_access.addEventListener('click', () => {
    menu_access.classList.remove('open_menu_access')
    head_menu_access.classList.remove('open_head_menu_access');
    menu_dub.classList.remove('open_menu_sobre');
    head_menu_access.classList.remove('open_head_menu_access_bg_white');
    document.querySelector('.over_screen').classList.remove('open_over_screen');
});
btn_open_menu_main.addEventListener('click', () => {
    menu_dub.classList.add('open_menu_sobre');
    head_menu_access.classList.add('open_head_menu_access_bg_white');
    document.querySelector('.over_screen').classList.add('open_over_screen');
});

//==================== btns control menu access ==================================


//=============================== control submenu ===================================
const submenu_desktop = document.querySelectorAll('.has-submenu');
if(!window.matchMedia("(max-width: 820px)").matches){

    submenu_desktop.forEach((item) => {
    
        item.addEventListener('mouseover', () => {
            
            let height_item = 0;
    
            let all_itens = item.querySelectorAll('.submenu li');
    
            all_itens.forEach((item2) => {
                height_item += item2.getBoundingClientRect().height;
            });
            console.log(height_item);
    
            item.querySelector('.submenu').style.height = height_item+20+"px";
        })
    
    });
    submenu_desktop.forEach((item) => {
    
        item.addEventListener('mouseleave', () => {
    
            item.querySelector('.submenu').style.height = "0px";
        })
    
    });
    console.log('é maior que 820px')
}else{

    submenu_desktop.forEach((item, index) => {

        item.addEventListener('click', () => {

            if(item.querySelector('.submenu').classList.contains('open_submenu_mobile')){
                item.querySelector('.submenu').classList.remove('open_submenu_mobile')
            }else{
                submenu_desktop.forEach((item2) => {
                    item2.querySelector('.submenu').classList.remove('open_submenu_mobile')
                });
    
                submenu_desktop[index].querySelector('.submenu').classList.add('open_submenu_mobile');
            }

        });

    });

}
close_menu_access.addEventListener('click', () => {
    submenu_desktop.forEach((item2) => {
        item2.querySelector('.submenu').classList.remove('open_submenu_mobile')
    });
});
document.querySelector('.over_screen').addEventListener('click', () => {
    menu_access.classList.remove('open_menu_access')
    head_menu_access.classList.remove('open_head_menu_access');
    menu_dub.classList.remove('open_menu_sobre');
    head_menu_access.classList.remove('open_head_menu_access_bg_white');
    document.querySelector('.over_screen').classList.remove('open_over_screen');
    submenu_desktop.forEach((item2) => {
        item2.querySelector('.submenu').classList.remove('open_submenu_mobile')
    });
});
//=============================== control submenu ===================================



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



//================================ effect itens menu hover ===================================
/*
const itens_hover = document.querySelectorAll('.menu_dub ul li.has-submenu > a');
const li_itens_hover = document.querySelectorAll('.menu_dub ul li.has-submenu');

itens_hover.forEach((item, index) => {

    let text_item_hover = item.innerText;

    console.log('height item: '+text_item_hover);

    let item_hover_before = document.createElement('span');
    item_hover_before.classList.add('item_before_class');
    item_hover_before.innerText = text_item_hover;

    itens_hover[index].append(item_hover_before);

    console.log(item_hover_before);

});
*/
//================================ effect itens menu hover ===================================
