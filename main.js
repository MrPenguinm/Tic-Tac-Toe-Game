let head = document.querySelector('.head');
let turn = 'x';
let sq = [];
const clickSound = new Audio('pen.m4a');

// 

function end(num1, num2, num3) {
    head.innerHTML = `${sq[num1]} win`;
    // 
    document.getElementById('item' + num1).classList.add('shake');
    document.getElementById('item' + num2).classList.add('shake');
    document.getElementById('item' + num3).classList.add('shake');
    // 
    document.getElementById('item' + num1).style.cssText = " transform: scale(1.05);border-radius: 6px; box-shadow: 0 2px 10px black;  background-color:#FFE31A;";
    document.getElementById('item' + num2).style.cssText = " transform: scale(1.05);border-radius: 6px; box-shadow: 0 2px 10px black;  background-color:#FFE31A;";
    document.getElementById('item' + num3).style.cssText = " transform: scale(1.05);border-radius: 6px; box-shadow: 0 2px 10px black;  background-color:#FFE31A;";

    setInterval(function() { head.innerHTML += '.' }, 1000);

    setTimeout(function() { location.reload() }, 7500);
    clickSound.play();
}

// Check for draw condition
function checkDraw() {
    let allFilled = true;

    for (let i = 1; i < 10; i++) {
        if (document.getElementById('item' + i).innerHTML === '') {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        head.innerHTML = "It's a Draw!";

        setTimeout(function() { location.reload() }, 2000);
        
    }

}

function win() {
    for (let i = 1; i < 10; i++) {
        sq[i] = document.getElementById('item' + i).innerHTML;
    }

    if (sq[1] == sq[2] && sq[2] == sq[3] && sq[2] != '') {
        end(1, 2, 3);
    } else if (sq[4] == sq[5] && sq[5] == sq[6] && sq[5] != '') {
        end(4, 5, 6);
    } else if (sq[7] == sq[8] && sq[8] == sq[9] && sq[8] != '') {
        end(7, 8, 9);
    } else if (sq[1] == sq[4] && sq[4] == sq[7] && sq[4] != '') {
        end(1, 4, 7);
    } else if (sq[2] == sq[5] && sq[5] == sq[8] && sq[5] != '') {
        end(2, 5, 8);
    } else if (sq[3] == sq[6] && sq[6] == sq[9] && sq[3] != '') {
        end(3, 6, 9);
    } else if (sq[1] == sq[5] && sq[5] == sq[9] && sq[5] != '') {
        end(1, 5, 9);
    } else if (sq[3] == sq[5] && sq[5] == sq[7] && sq[5] != '') {
        end(3, 5, 7);
    } else {
        // Check if it's a draw if no winner
        checkDraw();
    }
}

function game(id) {
    let elment = document.getElementById(id);

    if (turn === 'x' && elment.innerHTML == '') {
        elment.innerHTML = 'x';

        // تشغيل الصوت
        // clickSound.play();

        turn = 'o';
        head.innerHTML = 'O';
    } else if (turn === 'o' && elment.innerHTML == '') {
        elment.innerHTML = 'o';

        // تشغيل الصوت
        // clickSound.play();

        turn = 'x';
        head.innerHTML = 'X';
    };

    win();
}