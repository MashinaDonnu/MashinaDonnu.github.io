document.getElementsByClassName('burger-menu')[0].addEventListener('click', () => {
    const menu = document.getElementsByClassName('burger-menu-nav')[0]
    menu.classList.toggle('show')
})