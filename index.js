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
         console.log('_______________')
         line = "";
     }
 }  
}

const readline = require("readline");

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
    for (i = 0; i < tictactoe.length; i++) {
        if (moveToCheck == i && tictactoe[i] === ' ') {
            tictactoe[i] = player;
            if (player === 'X') {
                player = 'O';
            } else if (player === 'O') {
                player = 'X'
            }
        }else{
            playTicTacToe();
        }
    }
    console.log('\n');
    printBoard();
    const winner = calculateWinner();
    if (winner != ' ') {
        console.log("Winner is $'{winner}'")
        process.exit(0);
    }
    playTicTacToe();
}

const calculateWinner = () => {
    // We can improve this to make it less verbose by declaring the 
    // slots as const like const zero = ticktacktoe[0];
    // and replace all occurances
    if (tictactoe[0] == tictactoe[1] && tictactoe[0] == tictactoe[2]) {
           return tictactoe[0];
       } else if (tictactoe[3] == tictactoe[4] && tictactoe[3] == tictactoe[5]) {
           return tictactoe[3];
       } else if (tictactoe[6] == tictactoe[7] && tictactoe[6] == tictactoe[8]) {
           return tictactoe[6];
       } else if (tictactoe[0] == tictactoe[3] && tictactoe[0] == tictactoe[6]) {
           return tictactoe[0];
       } else if (tictactoe[1] == tictactoe[4] && tictactoe[1] == tictactoe[7]) {
           return tictactoe[1];
       } else if (tictactoe[2] == tictactoe[5] && tictactoe[2] == tictactoe[8]) {
           return winner = tictactoe[2];
       } else if (tictactoe[0] == tictactoe[4] && tictactoe[0] == tictactoe[8]) {
           return tictactoe[0];
       }else if (tictactoe[2] == tictactoe[4] && tictactoe[2] == tictactoe[6]) {
           return tictactoe[2];
       }
      return " ";
    }

printBoard();
defaultPlayer();