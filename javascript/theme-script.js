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

console.log(hero_slide_uni.length)