
export function construirHeader1Botao(ehIndex, link1, texto1){

    var home = "../index.html"
    var linkImagemLogo = "../src/images/logoCorvo.png"

    if (ehIndex){
        home = "./index.html"
        linkImagemLogo = "./src/images/logoCorvo.png"
    }

    var header = document.getElementById('header')
    header.innerHTML = `
        <nav class="menuNavegacao">
            <a href="${home}" class="linkLogoCorvoHeader"><img src="${linkImagemLogo}" alt="logoCorvo" class="imgLogoCorvo"><h1>ODIN SKOLE</h1></a>
            <a href="${link1}" class="btn linkBotaoHeader">${texto1}</a>
        </nav>
    `
    
}
