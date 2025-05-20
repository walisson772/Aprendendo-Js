// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function verificarTrue(idade){
    if (idade >= 18){
        return true
    }else{
        return false
    }
}

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome
}

function numeroPar(numero){
    if (numero % 2 === 0){
        return 'Numero par'
    }else {
        return 'Numero impar'
    }
}

function tipoDeDado(valor){
    return typeof valor
}



addEventListener('click', function(){
    console.log('Walisson Santos')
})