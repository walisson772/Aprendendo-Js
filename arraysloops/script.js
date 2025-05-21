let videoGames = ['xbox', 'ps4', 'ps5', '3ds']

//videoGames.pop() remove o ultimo item e retorna ele
//videoGames.push('3ds') adiciona ao final do array
//videoGames.length  retorna a quantidade de itens do array

//For loop
for(let numero = 1; numero <= 3; numero++){
    console.log(numero)
}

//While
let i = 1
while(i <= 2){
    console.log(i)
    i++
}

//Utilizando o for para percorrer meu array
for (let item = 0; item <= videoGames.length; item ++){
    if(videoGames[item] === 'ps4'){
        console.log(videoGames[item])
        console.log('Melhor console')
        break
    }
}

//ForEach
videoGames.forEach(function(item){
    console.log(item)
})
