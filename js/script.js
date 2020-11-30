const $menu = document.getElementsByClassName('menu')[0]
const $menuItens = document.getElementById('menu-itens')
let $menuText = document.getElementsByClassName('menu-text')[0]
let menuOpen = false

$menu.addEventListener('click', () => {
    $menuItens.classList.toggle('menu-active')
    
    if(menuOpen == false) {
        $menuText.innerHTML = ''
        $menu.innerHTML = 'X'
        menuOpen = true
    } else {
        $menuText.innerHTML = 'Menu'
        $menu.innerHTML = `
            <div class="menu-barra"></div>
            <div class="menu-barra"></div>
            <div class="menu-barra"></div>
        `
        menuOpen = false
    }
})