var passoAtual = 1;
var totalDePassos = 4;

function proximaPagina() {
    if (passoAtual < totalDePassos) {
        var secaoAtual = document.getElementById("passo" + passoAtual);
        secaoAtual.style.display = "none";

        passoAtual++;

        var proximaSecao = document.getElementById("passo" + passoAtual);
        proximaSecao.style.display = "block";
    }
}

function paginaAnterior() {
    if (passoAtual > 1) {
        var secaoAtual = document.getElementById("passo" + passoAtual);
        secaoAtual.style.display = "none";

        passoAtual--;

        var secaoAnterior = document.getElementById("passo" + passoAtual);
        secaoAnterior.style.display = "block";
    }
}

function enviarMatch() {
    for (let i = 1; i <= totalDePassos; i++) {
        document.getElementById("passo" + i).style.display = "none";
    }

    document.getElementById("section-formulario").style.display = "none";

    document.getElementById("hero-section-formulario").style.display = "none";

    const confirmacao = document.getElementById("confirmacao");
    confirmacao.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
}
