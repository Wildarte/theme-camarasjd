const open_search = document.querySelector('.btn_search.open_search');
const search_over = document.querySelector('.search_over');
const btn_slose_search = document.getElementById('btn_slose_search');
const hero_top = document.querySelector('.hero_top');

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
    }else{
        hero_top.classList.remove('over_hero_top');
        document.body.style.marginTop = "0px";
    }

});