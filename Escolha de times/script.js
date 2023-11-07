const jogadores = [];

document.getElementById('adicionarJogador').addEventListener('click', function () {
    const nomeJogador = document.getElementById('nomeJogador').value;
    if (nomeJogador) {
        jogadores.push(nomeJogador);
        document.getElementById('nomeJogador').value = '';
        atualizarListaJogadores();
    }
});

function atualizarListaJogadores() {
    const listaJogadores = document.getElementById('listaJogadores');
    listaJogadores.innerHTML = '';
    jogadores.forEach((jogador) => {
        const listItem = document.createElement('li');
        listItem.textContent = jogador;
        listaJogadores.appendChild(listItem);
    });
}

const team = 4;

function formarEquipes(players, team) {
    const playersCopy = [...players];
    const teams = Array.from({ length: team }, () => []);

    while (playersCopy.length > 0) {
        for (let i = 0; i < team; i++) {
            if (playersCopy.length > 0) {
                const randomIndex = Math.floor(Math.random() * playersCopy.length);
                const player = playersCopy.splice(randomIndex, 1)[0];
                teams[i].push(player);
            }
        }
    }

    return teams;
}

document.getElementById('formarTimes').addEventListener('click', function () {
    const equipesFormadas = formarEquipes(jogadores, team);
    const resultDiv = document.getElementById('times');
    resultDiv.innerHTML = '';

    equipesFormadas.forEach((equipe, index) => {
        const equipeDiv = document.createElement('div');
        equipeDiv.className = `equipe equipe-${index + 1}`;
        equipeDiv.innerHTML = `<h3>Time ${index + 1}</h3>${equipe.join('<br>')}`;
        resultDiv.appendChild(equipeDiv);
    });
});