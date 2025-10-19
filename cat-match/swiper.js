// swiper.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Swiper.js carregado'); // Debug: Verifique se o script roda

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const coracao = document.getElementById('coracao');
    const xmark = document.getElementById('xmark');

    if (!swiperWrapper) {
        console.error('Erro: .swiper-wrapper não encontrado no DOM');
        return;
    }

    if (!window.gatos || window.gatos.length === 0) {
        console.error('Erro: Array de gatos não carregado ou vazio');
        return;
    }

    console.log('Gatos carregados:', window.gatos); // Debug: Verifique os dados

    // Gera os slides dinamicamente
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
        console.log(`Slide ${index} criado para ${gato.nome}`); // Debug
    });

    // Inicializa o Swiper
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

    console.log('Swiper inicializado'); // Debug

    // Lida com o clique no coração
    coracao.addEventListener('click', () => {
        const activeSlideIndex = swiper.activeIndex % window.gatos.length;
        const gatoEscolhido = window.gatos[activeSlideIndex];
        localStorage.setItem('gatoEscolhido', JSON.stringify(gatoEscolhido));
        console.log('Gato escolhido:', gatoEscolhido); // Debug
        window.location.href = 'deu-match.html';
    });

    // Lida com o clique no X
    xmark.addEventListener('click', () => {
        swiper.slideNext();
    });
});