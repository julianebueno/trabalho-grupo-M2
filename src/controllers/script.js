
export function construirHeader1Botao(ehIndex, link1, texto1){

    var home = "../index.html"
    var linkImagemLogo = "../src/images/logoCorvo.png"

    if (ehIndex){
        home = "./index.html"
        linkImagemLogo = "./src/images/logoCorvo.png"
    }

    var header = document.getElementById('header')
    header.innerHTML = `
        <div class="designFundoLogo">
            <a href="${home}"><img src="${linkImagemLogo}" alt="logoCorvo" class="imgLogo"></a>
        </div>
        <h1>ODIN SKOLE</h1>
        <nav class="menuNavegacao">
            <a href="${link1}" class="btn btn-outline-primary linkPaginaInicial">${texto1}</a>
        </nav>
    `
    
}

