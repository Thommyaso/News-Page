document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('#navBar');
    const body = document.querySelector('body');
    const shadow = document.querySelector('.shadow');
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const bodyPadding = parseInt(computedStyle.getPropertyValue('--body-padding').trim(), 10);
    const updatedPadding = window.innerWidth - document.documentElement.clientWidth + bodyPadding;

    let timeoutId

    hamburger.addEventListener('click', () => {
        if(hamburgerMenu.classList.contains('navBar-active')) {
            clearTimeout(timeoutId);
            hamburgerMenu.classList.toggle('navBar-active');
            body.style.paddingRight = '';
            body.classList.remove('no-scroll');
            shadow.classList.remove('shadow-active')
            timeoutId = setTimeout(()=>{
                hamburgerMenu.classList.toggle('navBar-hidden');
            },100)
        } else {
            clearTimeout(timeoutId);
            hamburgerMenu.classList.toggle('navBar-hidden');
            body.style.paddingRight = `${updatedPadding}px`
            body.classList.add('no-scroll');
            shadow.classList.add('shadow-active');
            timeoutId = setTimeout(()=>{
                hamburgerMenu.classList.toggle('navBar-active');
                scroll()
            },100)
        }
        hamburger.classList.toggle('hamburger-active');
    })
})