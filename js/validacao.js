const botoesEnviar = document.querySelectorAll('.btn-enviar');

botoesEnviar.forEach(botao => {
    botao.addEventListener('click', function() {
        const input = botao.previousElementSibling.previousElementSibling.previousElementSibling;
        const primeiroSpan = input.nextElementSibling;
        const segundoSpan = primeiroSpan.nextElementSibling;

        if (input.value) {
            primeiroSpan.style.display = 'inline'; 
            segundoSpan.style.display = 'none';
            input.classList.add("valido");
            input.classList.remove("invalido");
        } else {
            segundoSpan.style.display = 'inline';
            primeiroSpan.style.display = 'none';
            input.classList.add("invalido");
            input.classList.remove("valido");
        }
    });
});