///test
let player = 'X';
let tictactoe = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];

const printBoard = () => {
 let line = "";
 for (let i = 1; i < 10; i++) {
     line += tictactoe[i-1] + ' | ';
     if (i % 3 === 0) {
         console.log(line);
         comsole.log('_______________')
         line = "";
     }
 }  
}

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

const defaultPlayer = () => {
    rl.question("Default player is X, Do you want to change it, y or n", function (defaultOrChoose) {
        let choice = defaultOrChoose.toLowerCase();
        if (choice == 'y') {
            setPlayer();
        } else if (choice === 'n') {
            console.log('Starting player is X');
            printBoard();
            playTicTacToe();
        } else {
            defaultPlayer();
        }
    });
}

const setPlayer = () => {
    rl.question("Default player is X, Do you want to change it, enter 0? ", function (whichPlayer) {
        changePlayer(whichPlayer);
    });
}

const changePlayer = (playerChange) => {
    let mov = playerChange.toUpperCase();
    if (mov === 'O' || mov === 'X') {
        console.log('Starting player is ${mov}')
        player = mov;
        printBoard();
        playTicTacToe();
    } else {
        setPlayer();
    }
}

const playTicTacToe = () => {
    let continuePlay = false;
    for (i = 0; i < tictactoe.length; i++) {
        if (tictactoe[i] === ' ') {
            continuePlay = true;
        }
    }
    if (continuePlay === true) {
        rl.question("Play Game? ", function (movve) {
            gameplayer(movve)
        });
    }
};

const gameplayer = (move) => {
    let moveToCheck = parseInt(move) - 1;
    let i;
    for (i = 0;)
}
