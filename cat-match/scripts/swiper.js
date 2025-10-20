document.addEventListener('DOMContentLoaded', () => {
    console.log('Swiper.js carregado');

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const coracao = document.getElementById('coracao');
    const xmark = document.getElementById('xmark');
    const deuMatch = document.getElementById('deu-match');
    const primeiraParte = document.getElementById('primeira-parte');
    const fecharMatch = document.getElementById('fechar-match');

    if (!swiperWrapper) {
        console.error('Erro: .swiper-wrapper não encontrado no DOM');
        return;
    }

    if (!window.gatos || window.gatos.length === 0) {
        console.error('Erro: Array de gatos não carregado ou vazio');
        return;
    }

    console.log('Gatos carregados:', window.gatos); 

    window.gatos.forEach((gato, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <figure id="figure-match">
                <img src="${gato.imagem}" alt="${gato.nome}">
                <figcaption>
                    <div id="descricao">
                        <ul>
                            <li><strong>Nome: </strong>${gato.nome}</li>
                            <li><strong>Cor: </strong>${gato.cor}</li>
                            <li><strong>Idade: </strong>${gato.idade}</li>
                            <li><strong>Personalidade: </strong>${gato.personalidade}</li>
                        </ul>
                    </div>
                    <div id="tags">
                        <ul>
                            ${gato.tags.map(tag => `<li>${tag}</li>`).join('')}
                        </ul>
                    </div>
                </figcaption>
            </figure>
        `;
        swiperWrapper.appendChild(slide);
        console.log(`Slide ${index} criado para ${gato.nome}`); 
    });

    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    console.log('Swiper inicializado');

    coracao.addEventListener('click', () => {
        const activeSlideIndex = swiper.realIndex;
        const gatoEscolhido = window.gatos[activeSlideIndex];
        localStorage.setItem('gatoEscolhido', JSON.stringify(gatoEscolhido));
        console.log('Gato escolhido:', gatoEscolhido);
        deuMatch.style.display = "flex";

        const imgGato = document.getElementById('img-gato');
        const captionMatch = document.getElementById('caption-deu-match');
        imgGato.src = gatoEscolhido.imagem;
        imgGato.alt = `Gato escolhido: ${gatoEscolhido.nome}`;
        captionMatch.textContent = `Vocês deram match! ${gatoEscolhido.nome} quer saber mais sobre você!`;
        });

    xmark.addEventListener('click', () => {
        swiper.slideNext();
    });

    fecharMatch.addEventListener('click', () => {
        console.log('Fechando modal');
        deuMatch.style.display = "none";
        primeiraParte.style.display = "block";
    });

});