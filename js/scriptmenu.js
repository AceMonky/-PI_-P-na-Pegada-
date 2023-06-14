function exibirSubMenu() {
    var menuClique = document.getElementById("menuclique");
    var menuPai = menuClique.parentNode;
    menuPai.classList.add("submenu-aberto");
}

function ocultarSubMenu() {
    var menuClique = document.getElementById("menuclique");
    var menuPai = menuClique.parentNode;
    menuPai.classList.remove("submenu-aberto");
}