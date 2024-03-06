function sortear() {
    let qtd = parseInt(document.getElementById('quantidade').value);
    let num1 = parseInt(document.getElementById('de').value);
    let num2 = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < qtd; i++) {
        numero = obterNumeroAleatorio(num1, num2);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(num1, num2);
        }

        sorteados.push(numero);
        
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    
    botao =  document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');

}


function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    botao =  document.getElementById('btn-reiniciar');
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
}
