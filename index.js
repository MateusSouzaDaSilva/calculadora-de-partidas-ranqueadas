function rankedBalance(wins, losses) {
    let balance = wins - losses
    let level
    if (balance >= 101) {
        level = "Imortal";
    } else if (balance >= 91) {
        level = "Lendário";
    } else if (balance >= 81) {
        level = "Diamante";
    } else if (balance >= 51) {
        level = "Ouro";
    } else if (balance >= 21) {
        level = "Prata";
    } else if (balance >= 10) {
        level = "Bronze";
    } else if (balance < 10) {
        level = "Ferro";
    }

    return `O Herói tem de saldo de ${balance} está no nível de ${level}`

}

let frase = rankedBalance(45, 10)
console.log(frase)