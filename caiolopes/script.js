function gerarTabuada() {
    const lista    = document.getElementById("lista");
    const mensagem = document.getElementById("mensagem");
    const valor    = parseInt(document.getElementById("numero").value);

    lista.innerHTML    = "";
    mensagem.textContent = "";

    if (isNaN(valor) || valor < 1) {
        mensagem.textContent = "Insira um número válido maior que 0.";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.textContent = `${valor} x ${i} = ${valor * i}`;
        lista.appendChild(item);
    }
}