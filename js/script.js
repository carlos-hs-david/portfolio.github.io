const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

//animação

if(window.SimpleAnime) {
    new SimpleAnime();
}