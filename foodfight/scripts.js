let options = [
  "Pizza",
  "Hambúrguer",
  "Sushi",
  "Pasta",
  "Salada",
  "Sorvete",
  "Batata Frita",
  "Tacos",
  "Coxinha",
  "Empadão",
  "Churrasco",
  "Bolo de Chocolate",
  "Esfiha",
  "Donuts",
  "Hot Dog",
  "Panquecas",
  "Arroz com Feijão",
  "Pão de Queijo",
  "Cupcake",
  "Lasanha",
  "Quiche",
  "Frango Assado",
  "Crepe",
  "Fondue",
  "Yakissoba",
  "Torta de Maçã",
  "Ratatouille",
  "Paella",
  "Bife à Milanesa",
  "Moqueca",
  "Ceviche",
  "Brigadeiro",
];

let currentRound = [];
let winners = [];
let currentIndex = 0;
let roundNumber = 1;

// Função para iniciar o jogo
function startGame() {
  roundNumber = 1; // Reinicia o número da rodada
  updateRoundDisplay(); // Atualiza a exibição da rodada
  document.querySelector(".home").classList.add("hidden");
  document.querySelector(".quiz").classList.remove("hidden");
  startRound();
}

// Função para iniciar uma nova rodada
function startRound() {
  if (options.length === 1) {
    showWinner(options[0]);
    return;
  }

  currentRound = [...options];
  winners = [];
  currentIndex = 0;
  updateRoundDisplay(); // Atualiza a exibição da rodada
  showOptions();
}

// Função para exibir as opções atuais
function showOptions() {
  if (currentIndex >= currentRound.length) {
    options = [...winners];
    roundNumber++; // Incrementa o número da rodada
    startRound();
    return;
  }

  document.getElementById("option1").textContent = currentRound[currentIndex];
  document.getElementById("option2").textContent =
    currentRound[currentIndex + 1];

  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  option1.replaceWith(option1.cloneNode(true));
  option2.replaceWith(option2.cloneNode(true));

  document
    .getElementById("option1")
    .addEventListener("click", () => pickWinner(currentRound[currentIndex]));
  document
    .getElementById("option2")
    .addEventListener("click", () =>
      pickWinner(currentRound[currentIndex + 1])
    );
}

// Função para processar a escolha do vencedor
function pickWinner(winner) {
  winners.push(winner);
  currentIndex += 2;
  showOptions();
}

// Função para exibir o vencedor final
function showWinner(winner) {
  document.querySelector(".quiz").classList.add("hidden");
  document.querySelector(".winner").classList.remove("hidden");
  document.querySelector(".result").textContent = winner;
}

// Função para reiniciar o jogo
function restartGame() {
  roundNumber = 1;
  options = [
    "Pizza",
    "Hambúrguer",
    "Sushi",
    "Pasta",
    "Salada",
    "Sorvete",
    "Batata Frita",
    "Tacos",
    "Coxinha",
    "Empadão",
    "Churrasco",
    "Bolo de Chocolate",
    "Esfiha",
    "Donuts",
    "Hot Dog",
    "Panquecas",
    "Arroz com Feijão",
    "Pão de Queijo",
    "Cupcake",
    "Lasanha",
    "Quiche",
    "Frango Assado",
    "Crepe",
    "Fondue",
    "Yakissoba",
    "Torta de Maçã",
    "Ratatouille",
    "Paella",
    "Bife à Milanesa",
    "Moqueca",
    "Ceviche",
    "Brigadeiro",
  ];

  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".home").classList.remove("hidden");
}

// Função para atualizar o número da rodada no DOM
function updateRoundDisplay() {
  document.getElementById("round-number").textContent = roundNumber;
}
