function areaQuadrado(lado){
    return lado * lado
}

function corFavorita(cor){
    if (cor === 'azul'){
        return 'Me lembra o ceu'
    }else if(cor === 'preto'){
        return 'Gosto bastante de preto'
    }else {
        return 'Não gosto dessa cor'
    }
}

// jeito "maior"
function digaOi(){
    console.log('Oi')
}

// Jeito mais "abreviado"
addEventListener('click', digaOi)// ou function()

