// Mapeamento das estações
const estacoes = {
    "A": "Alfa",
    "B": "Beta",
    "C": "Gama",
    "D": "Delta",
    "E": "Épsilon",
    "F": "Zeta",
    "G": "Lambda",
    "H": "Mu",
    "I": "Iota",
    "J": "Teta",
    "K": "Eta",
    "L": "Kappa"
};

// Dados das linhas de ônibus, horários e rotas
const dadosLinhas = {
    "101": {
        horarios: "06:00, 12:00, 18:00",
        rota: [estacoes["A"], estacoes["B"], estacoes["C"]]
    },
    "202": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["C"], estacoes["D"], estacoes["E"], estacoes["F"]]
    },
    "303": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["E"], estacoes["F"], estacoes["L"], estacoes["G"], estacoes["H"]]
    },
    "404": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["G"], estacoes["H"]]
    },
    "505": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["J"], estacoes["I"], estacoes["H"]]
    },
    "606": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["A"], estacoes["K"], estacoes["J"]]
    },
    "909": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["B"], estacoes["C"], estacoes["D"]]
    },
    "1010": {
        horarios: "07:30, 13:30, 19:30",
        rota: [estacoes["K"], estacoes["J"], estacoes["I"], estacoes["L"]]
    },
    // Adicione mais linhas conforme necessário
};

let linhasFavoritas = [];

function buscarLinha() {
    const linha = document.getElementById("linha-input").value.trim();
    const resultadoDiv = document.getElementById("resultado-linha");
    const horariosLinha = document.getElementById("horarios-linha");
    const rotaOnibus = document.getElementById("rota-onibus");

    // Limpar conteúdo anterior
    horariosLinha.textContent = '';
    rotaOnibus.innerHTML = '';

    if (dadosLinhas[linha]) {
        // Exibir os horários e a rota
        horariosLinha.textContent = `Horários: ${dadosLinhas[linha].horarios}`;
        dadosLinhas[linha].rota.forEach(ponto => {
            const listItem = document.createElement('li');
            listItem.textContent = ponto;
            rotaOnibus.appendChild(listItem);
        });
        resultadoDiv.classList.remove('hidden');
    } else {
        horariosLinha.textContent = "Linha não encontrada.";
        resultadoDiv.classList.remove('hidden');
    }
}

function adicionarFavorita(linha) {
    if (!linhasFavoritas.includes(linha)) {
        linhasFavoritas.push(linha);
        atualizarLinhasFavoritas();
    }
}

function atualizarLinhasFavoritas() {
    const listaFavoritas = document.getElementById("linhas-favoritas");
    listaFavoritas.innerHTML = ''; // Limpa a lista anterior

    linhasFavoritas.forEach(linha => {
        const listItem = document.createElement('li');
        listItem.textContent = linha;
        listItem.onclick = () => mostrarInformacoesLinha(linha); // Adiciona a função de clique
        listaFavoritas.appendChild(listItem);
    });
}

function mostrarInformacoesLinha(linha) {
    const resultadoDiv = document.getElementById("resultado-linha");
    const horariosLinha = document.getElementById("horarios-linha");
    const rotaOnibus = document.getElementById("rota-onibus");

    // Limpar conteúdo anterior
    horariosLinha.textContent = '';
    rotaOnibus.innerHTML = '';

    if (dadosLinhas[linha]) {
        // Exibir os horários e a rota
        horariosLinha.textContent = `Horários: ${dadosLinhas[linha].horarios}`;
        dadosLinhas[linha].rota.forEach(ponto => {
            const listItem = document.createElement('li');
            listItem.textContent = ponto;
            rotaOnibus.appendChild(listItem);
        });
        resultadoDiv.classList.remove('hidden');
    } else {
        horariosLinha.textContent = "Linha não encontrada.";
        resultadoDiv.classList.remove('hidden');
    }
}

// Exemplo: Adicionando algumas linhas favoritas
adicionarFavorita("101");
adicionarFavorita("202");
