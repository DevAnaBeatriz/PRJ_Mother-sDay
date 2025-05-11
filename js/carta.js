window.addEventListener('scroll', () => {
    const carta = document.getElementById('emojiCarta');
    const top = carta.getBoundingClientRect().top;
    const bottom = carta.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
  
    // Se a carta estiver visível (ou parcialmente visível)
    if (top < windowHeight - 100 && bottom > 100) {
      carta.classList.add('aberta');
    } else {
      carta.classList.remove('aberta');
    }
  });
  

  function mostrarPresente() {
    const mensagem = document.getElementById('mensagem-presente');
    mensagem.style.display = 'block';
  }
  
  function alternarMusica() {
    const audio = document.querySelector("audio");
    const botao = document.querySelector(".controle-musica");
  
    if (audio.paused) {
      audio.play();
      botao.innerHTML = "🔊 Tocando";
    } else {
      audio.pause();
      botao.innerHTML = "🔇 Pausado";
    }
  }
  