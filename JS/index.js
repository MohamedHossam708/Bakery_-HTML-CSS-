

window.addEventListener('scroll',()=>{
    const navEL=document.querySelector('.navbar')
    if(window.scrollY >= 56){
        navEL.classList.add('navbar_scroll')
    }else if (window.scrollY < 56){
        navEL.classList.remove('navbar_scroll')
    }
})