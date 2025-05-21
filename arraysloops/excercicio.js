// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let copa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copa.forEach(function(ano){
    console.log(`O Brasil ganhou a copa no ano de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let fruta = 0; fruta <= frutas.length; fruta ++){
    console.log(frutas[fruta])
    if (frutas[fruta] === 'Pera'){
        console.log('Chegou em Pera')
        break
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[4]
console.log(ultimaFruta)