const grid = document.getElementById("grid");
let difficulty = 0; // 0=EASY 1=MEDIUM 2=HARD
let numBox = 49;
let boxPerRow = 7;
let numBombs = 10;

const easy = document.querySelector(".easyBtn");
const medium = document.querySelector(".mediumBtn");
const hard = document.querySelector(".hardBtn");
const crazy = document.querySelector(".crazyBtn");

//Inizializzazione griglia modalità easy
grid.className = "easyGrid";
fillGrid(7);
bombsGenerator(numBox, numBombs);


//Cambio difficoltà --> nuova partita
easy.addEventListener('click', function () { changeDifficulty(0) });
medium.addEventListener('click', function () { changeDifficulty(1) });
hard.addEventListener('click', function () { changeDifficulty(2) });
crazy.addEventListener('click', function () { changeDifficulty(3) });



//FUNZIONI

//Cambio difficoltà e nuova griglia con nuovo riempimento
function changeDifficulty(lvl) {
    if (lvl == 0) {//***livello facile
        numBox = 49;
        boxPerRow = 7;
        numBombs = 10;
        grid.className = "easyGrid";
        grid.innerHTML = ""; //svuota la griglia
        fillGrid(boxPerRow); //riempi la griglia
        bombsGenerator(numBox, numBombs);
    } else if (lvl == 1) {//***livello medio
        numBox = 121;
        boxPerRow = 11;
        numBombs = 25;
        grid.className = "mediumGrid";
        grid.innerHTML = ""; //svuota la griglia
        fillGrid(boxPerRow); //riempi la griglia
        bombsGenerator(numBox, numBombs);
    } else if (lvl == 2) {//***livello difficile
        numBox = 225;
        boxPerRow = 15;
        numBombs = 50;
        grid.className = "hardGrid";
        grid.innerHTML = ""; //svuota la griglia
        fillGrid(boxPerRow); //riempi la griglia
        bombsGenerator(numBox, numBombs);
    } else {//***livello crazy
        numBox = 625;
        boxPerRow = 25;
        numBombs = 100;
        grid.className = "crazyGrid";
        grid.innerHTML = ""; //svuota la griglia
        fillGrid(boxPerRow); //riempi la griglia
        bombsGenerator(numBox, numBombs);
    }
}

//Riempimento griglia
function fillGrid(nItems) {
    for (let i = 0; i < nItems; i++) {
        for (let j = 0; j < nItems; j++) {
            const box = document.createElement('div');
            box.className = `box box-${positionCalc(i, j, boxPerRow)} raw-${i} col-${j}`;
            //Classe speciale per elementi della prima e ultima riga
            if (i == 0) {
                box.classList.add(`noTop`);
            }
            if (i == nItems - 1) {
                box.classList.add("noBot");
            }

            //Classe speciale per elementi della prima e ultima colonna
            if (j == 0) {
                box.classList.add("noLeft");
            }
            if (j == nItems - 1) {
                box.classList.add("noRight");
            }
            grid.appendChild(box);
            box.addEventListener('click', function () {
                console.log(this);
                this.classList.add("active");
            });
        }
    }
}

//generazione e inserimento bombe
function bombsGenerator(box, bombs) {
    const array = [];
    for (let i = 0; i < bombs; i++) {
        let token = Math.floor(Math.random() * (box - 1));
        if (array.includes(token)) {
            i--;
        } else {
            array[i] = token;
        }
    }
    arrayBox = document.getElementsByClassName('box');
    for (let j = 0; j < bombs; j++) {
        arrayBox[array[j]].classList.add("bomb");
    }
}


//calcolo della posizione di box in un sistema a matrice
function positionCalc(raw, col, tot) {
    return ((raw * tot) + col)
}

function numBombsAround() {

}