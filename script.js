let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

let result = document.querySelector('.result');
let resultX = document.querySelector('.resultX');
let resultY = document.querySelector('.resultY');
let scoreValueX= document.querySelector('.scoreValueX');
let scoreValueY= document.querySelector('.scoreValueY');


let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function score(winner){
    if (winner== "X"){
        scoreValueX.innerHTML ++;
        console.log(scoreValueX.innerHTML,scoreValueY.innerHTML);
    }else{
        scoreValueY.innerHTML ++;
        console.log(scoreValueX.innerHTML,scoreValueY.innerHTML);

    }
}

const ticTacToe = (element, index) => {
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X'; //condition
    result.innerHTML = `Player ${currentPlayer} Turn`;

    for (let i = 0; i < conditions.length; i++) {
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        if (a == '' || b == '' || c == '') {
            continue;
        }

        if ((a == b) && (b == c)) {
            result.innerHTML = `Player ${a} Won`;
            btns.forEach((btn) => btn.disabled = true);
            score(a);

        }
            
    }

};


function reset() {
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn) => {
        btn.value = '';
    });
    currentPlayer = 'X';
    result.innerHTML = `Player X Turn`;
    btns.forEach((btn) => btn.disabled = false);
};

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});