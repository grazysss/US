function atualizarContador() {
    const dataInicio = new Date("2024-07-12T00:00:00");
    const agora = new Date(); 
    const diferenca = agora - dataInicio; 

    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
    const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)) % 30;
    const semanas = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 7)) % 4;
    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
    
    document.getElementById("contador").innerHTML = 
        `${meses} meses, ${semanas} semanas, <br>
        ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

}

atualizarContador(); 
setInterval(atualizarContador, 1000); 

function criarEmoji() {
    const emojis = ["❤️"];
    const emoji = document.createElement("div");

    emoji.classList.add("emoji");
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    document.body.appendChild(emoji);

    emoji.style.left = Math.random() * 100 + "vw"; 
    emoji.style.fontSize = Math.random() * 20 + 20 + "px"; 
    emoji.style.animationDuration = Math.random() * 2 + 2 + "s"; 

    setTimeout(() => {
        emoji.remove();
    }, 3000);
}

setInterval(criarEmoji, 300);