const FRONT ="card_front"
const BACK = "card_back"

let apps = ['bootstrap',
'css',
'glpi',
'html',
'javascript',
'jquery',
'oracle',
'scriptcase',
'senior',
'solus'];

let cards = null;

startGame();

function startGame() {
    cards = createCardsFromTechs(techs);
    shufflesCards(cards);
    console.log(cards)    
}

function shufflesCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex) // só pegar cartas que não foram embaralhadas
        currentIndex --;
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex]]
        
    }
}

function createCardsFromTechs(techs) {
    let cards = [];

    for(let tech of techs){
        cards.push(createPairFromTech(tech)) //adiciona a carta e duplica por ser um jogo da memoria
    }
    
    return cards.flatMap(pair => pair); //ornenação das cartas 
}

function createPairFromTech(tech) {
    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped:false,
    },{
        id: createIdWithTech(tech),
        icon: tech,
        flipped:false,
    }]
}

function createIdWithTech(tech) {
    return tech + parseInt(Math.random()*1000); // criando um id aleatorio inteiro
}