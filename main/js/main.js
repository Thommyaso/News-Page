document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('#navBar');
    const body = document.querySelector('body');
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const bodyPadding = parseInt(computedStyle.getPropertyValue('--body-padding').trim(), 10);
    const updatedPadding = window.innerWidth - document.documentElement.clientWidth + bodyPadding;

    hamburger.addEventListener('click', () => {
        if(hamburgerMenu.classList.contains('navBar-active')) {
            hamburgerMenu.classList.toggle('navBar-active');
            body.style.paddingRight = '';
            body.classList.remove('no-scroll');
            setTimeout(()=>{
                hamburgerMenu.classList.toggle('navBar-hidden');
            },100)
        } else {
            hamburgerMenu.classList.toggle('navBar-hidden');
            body.style.paddingRight = `${updatedPadding}px`
            body.classList.add('no-scroll');
            setTimeout(()=>{
                hamburgerMenu.classList.toggle('navBar-active');
                scroll()
            },100)
        }
        hamburger.classList.toggle('hamburger-active');
    })
})