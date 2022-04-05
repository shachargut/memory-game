const cards = ['A','B','C','A','B','C']; 
const board = document.getElementById("board");

function createCard(idx){
    const cardEl = document.createElement("div");
    cardEl.innerHTML = cards [idx];
    cardEl.id = idx;
    cardEl.className = "card"
    return cardEl;
}

function shuflle(arr){
    return arr.sort(() => Math.random() - 0.5);
}
shuflle(cards);


for (i in cards){
    let element = createCard(i);
    board.appendChild(element);
}