let simvol = 'X';
let virtualTable = [ // массив в котором хранится данные таблицы
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let table = document.querySelector("table");
let span = document.querySelector("span");
let audio = document.createElement('audio');
let counter = 0;
let tdAll = document.querySelectorAll('td');
table.onclick = function (e) { // (е) - информация о событии
    audio.setAttribute('src', 'audio/jeleznaya-knopka-vyiklyucheniya1.mp3');
    audio.play();
    let target = e.target; // переменная в которую попадает то на что нажали (ячейка)
    if (target.innerHTML == '') {
        let numberRow = target.parentElement.rowIndex; // переменная в которую попадает порядковый номер строки
        let numberCell = target.cellIndex;// переменная в которую попадает порядковый номер ячейки
        virtualTable[numberRow][numberCell] = simvol; // вписываем в нужное место на виртуальной таблице символ
        console.log(virtualTable)
        target.innerHTML = simvol;
        counter++;
        if (simvol == 'X') {
            simvol = '0';
        } else {
            simvol = 'X';
        }
        span.innerHTML = simvol;
        if (win() == 'X') {
            setTimeout(() => {
                alert('Победил Х');
                reset();
            }, 500);
            audio.setAttribute('src', 'audio/9f3e49b8de7c9d7.mp3');
            audio.play();
        } else if (win() == '0') {
            setTimeout(() => {
                alert('Победил 0');
                reset();
            }, 500);
            audio.setAttribute('src', 'audio/9f3e49b8de7c9d7.mp3');
            audio.play();
        } else if (counter == 9) {
            setTimeout(() => {
                alert('Ничья!');
                reset();
            }, 500);
            audio.setAttribute('src', 'audio/the-end-1.mp3');
            audio.play();
        }
    } else {
        audio.setAttribute('src', 'audio/b5f0886abfa6621.mp3');
        audio.play();
        target.classList.add('red');
        setTimeout(() => {
            target.classList.remove('red');
        }, 200);
    }

}

function win() {
    if (virtualTable[0][0] == 'X' && virtualTable[0][1] == 'X' && virtualTable[0][2] == 'X') {
        return 'X';
    }
    if (virtualTable[0][0] == '0' && virtualTable[0][1] == '0' && virtualTable[0][2] == '0') {
        return '0';
    }
    if (virtualTable[1][0] == 'X' && virtualTable[1][1] == 'X' && virtualTable[1][2] == 'X') {
        return 'X';
    }
    if (virtualTable[1][0] == '0' && virtualTable[1][1] == '0' && virtualTable[1][2] == '0') {
        return '0';
    }
    if (virtualTable[2][0] == 'X' && virtualTable[2][1] == 'X' && virtualTable[2][2] == 'X') {
        return 'X';
    }
    if (virtualTable[2][0] == '0' && virtualTable[2][1] == '0' && virtualTable[2][2] == '0') {
        return '0';
    }
    if (virtualTable[0][0] == 'X' && virtualTable[1][0] == 'X' && virtualTable[2][0] == 'X') {
        return 'X';
    }
    if (virtualTable[0][0] == '0' && virtualTable[1][0] == '0' && virtualTable[2][0] == '0') {
        return '0';
    }
    if (virtualTable[0][1] == 'X' && virtualTable[1][1] == 'X' && virtualTable[2][1] == 'X') {
        return 'X';
    }
    if (virtualTable[0][1] == '0' && virtualTable[1][1] == '0' && virtualTable[2][1] == '0') {
        return '0';
    }
    if (virtualTable[0][2] == 'X' && virtualTable[1][2] == 'X' && virtualTable[2][2] == 'X') {
        return 'X';
    }
    if (virtualTable[0][2] == '0' && virtualTable[1][2] == '0' && virtualTable[2][2] == '0') {
        return '0';
    }
    if (virtualTable[0][0] == 'X' && virtualTable[1][1] == 'X' && virtualTable[2][2] == 'X') {
        return 'X';
    }
    if (virtualTable[0][0] == '0' && virtualTable[1][1] == '0' && virtualTable[2][2] == '0') {
        return '0';
    }
    if (virtualTable[0][2] == 'X' && virtualTable[1][1] == 'X' && virtualTable[2][0] == 'X') {
        return 'X';
    }
    if (virtualTable[0][2] == '0' && virtualTable[1][1] == '0' && virtualTable[2][0] == '0') {
        return '0';
    }
}

function reset() {
    counter = 0;
    virtualTable = [ // массив в котором хранится данные таблицы
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    simvol = 'X';
    span.innerHTML = 'X';
    for (let number = 0; number < 9; number++) {
        tdAll[number].innerHTML = '';
    }
}