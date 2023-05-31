function randomizer() {
    let questoes = new Array(10);
    let numero;

    for(let i = 0; i < 10; i++) {
        do {
            numero = parseInt(Math.random()*19);
        } while(questoes.includes(numero) || numero == 0);

        questoes[i] = numero;
    }

    console.log(questoes.sort());

    return questoes;
}

randomizer();