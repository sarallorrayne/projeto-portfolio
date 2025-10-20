document.addEventListener('DOMContentLoaded', () => {
    const imgGato = document.getElementById('img-gato');
    const caption = document.getElementById('caption-deu-match');
    // Recupera o gato escolhido do localStorage
    const gatoEscolhido = JSON.parse(localStorage.getItem('gatoEscolhido'));
    if (gatoEscolhido) {
        // Atualiza a imagem
        imgGato.src = gatoEscolhido.imagem;
        imgGato.alt = gatoEscolhido.nome;
        // Atualiza o texto (opcional: personalize o caption com dados do gato)
        caption.textContent = `Vocês deram match! ${gatoEscolhido.nome} quer saber mais sobre você!`;
    } else {
        // Fallback se nenhum gato foi selecionado
        caption.textContent = 'Nenhum gato selecionado. Volte e escolha um!';
    }
});