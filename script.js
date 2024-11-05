// Data fixa a partir da qual o tempo deve ser contado
const dataFixa = new Date(2023, 5, 9); // 09/06/2023 (mês começa em 0)

// Função para atualizar o tempo de relacionamento
function atualizarDataHora() {
    const agora = new Date();
    const diff = agora - dataFixa; // Diferença em milissegundos

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("data-hora").innerHTML = `
        Anos: ${anos}<br>
        Meses: ${meses}<br>
        Dias: ${dias}<br>
        Horas: ${horas.toString().padStart(2, '0')}<br>
        Minutos: ${minutos.toString().padStart(2, '0')}<br>
        Segundos: ${segundos.toString().padStart(2, '0')}
    `;
}

// Inicializa a data e hora em tempo real
setInterval(atualizarDataHora, 1000);

// Função para criar os corações
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.className = 'coracao';

    // Define a posição inicial aleatória do coração
    const posicaoX = Math.random() * window.innerWidth;
    coracao.style.left = `${posicaoX}px`;

    // Adiciona o coração ao contêiner
    document.getElementById('coracoes').appendChild(coracao);

    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, 5000); // 5 segundos para coincidir com a duração da animação
}

// Gera corações a cada segundo
setInterval(criarCoracao, 1000);

// Função para exibir o texto e data-hora com animação
function exibirElementos() {
    document.getElementById("texto").style.opacity = '1';
    document.getElementById("data-hora").style.opacity = '1';
}

// Chama a função para exibir elementos após o carregamento da página
window.onload = exibirElementos;









