(function($) {
    var square = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    var squareGame;
    let size = 60;
    var moves_V;
    var cheat_ind;

    function NewGame() {
        let NewSquare= [].concat(square);
        let NSquare=[];
        let j;
        for (let i=0;i<16;i++){
            j=Math.floor(Math.random()*NewSquare.length);
            NSquare[i]=NewSquare[j];
            NewSquare.splice(j,1);
        }
        console.log(NSquare);
        moves_V=0;
        cheat_ind=0;
        return squareGame=NSquare;
    }

    document.addEventListener('DOMContentLoaded', function () {
        NewGame();
        document.getElementById('newGame').addEventListener('click', function(){
            NewGame();
            startGame();
        });

        document.getElementById('cheat').addEventListener('click', cheater);
        startGame();
    });


    document.addEventListener('keydown', function (keyCode) {
        if (keyCode.which == 37 || keyCode.which == 38 || keyCode.which == 39 || keyCode.which == 40) {
            move(keyCode.which);
            moves_V += 1;
            win()
        }
    });

    function win() {
        if (JSON.stringify(square) === JSON.stringify(squareGame)) {
            if (cheat_ind == 0) {
                alert('For victory you made' + moves_V + 'moves');
            } else {
                alert('For victory you made ' + moves_V + ' moves' + 'and used cheat ' + cheat_ind + ' times');
            }
        }
    }


    function cheater (){
        for(let i=0;i<square.length;i++){
            if (square[i]!=squareGame[i]){
                for(let j=i;j<square.length;j++){
                    if (square[i]==squareGame[j]){
                        [squareGame[j],squareGame[i]]=[squareGame[i],squareGame[j]];
                        cheat_ind+=1;
                        console.log('Cheat use' + cheat_ind);
                        console.log(squareGame);
                        startGame();
                        win()
                        break;
                    }
                }
                break;
            }
        }
    }

    function move(keyCode) {
        let pos = squareGame.indexOf(0);
        if (keyCode == 39||keyCode == 68) {
            if (pos % 4 != 3 ) {
                let leftItem = $('#square li[data-index=' + squareGame[pos + 1] + ']');
                let ZERO = $('#square li[data-index=' + squareGame[pos] + ']');
                leftItem.css('left',(pos % 4) * size);
                ZERO.css('left',((pos + 1) % 4) * size);
                [squareGame[pos],squareGame[pos+1]]=[squareGame[pos+1],squareGame[pos]];
            }
        }
        if (keyCode == 37||keyCode == 65) {
            if (pos % 4 != 0 ) {
                let rightItem = $('#square li[data-index=' + squareGame[pos - 1] + ']');
                let ZERO = $('#square li[data-index=' + squareGame[pos] + ']');
                rightItem.css('left',(pos % 4) * size);
                ZERO.css('left',((pos - 1) % 4) * size);
                [squareGame[pos],squareGame[pos-1]]=[squareGame[pos-1],squareGame[pos]];
            }
        }
        if (keyCode == 40||keyCode == 83) {
            if (Math.floor(pos / 4) != 3 ) {
                let downItem = $('#square li[data-index=' + squareGame[pos + 4] + ']');
                let ZERO = $('#square li[data-index=' + squareGame[pos] + ']');
                downItem.css('top',Math.floor(pos / 4) * size);
                ZERO.css('top',(Math.floor(pos / 4) + 1) * size);
                [squareGame[pos],squareGame[pos+4]]=[squareGame[pos+4],squareGame[pos]];
            }
        }
        if (keyCode == 38||keyCode == 87) {
            if (Math.floor(pos / 4) != 0 ) {
                let upItem = $('#square li[data-index=' + squareGame[pos - 4] + ']');
                let ZERO = $('#square li[data-index=' + squareGame[pos] + ']');
                upItem.css('top',Math.floor(pos / 4) * size);
                ZERO.css('top',(Math.floor(pos / 4) - 1) * size);
                [squareGame[pos],squareGame[pos-4]]=[squareGame[pos-4],squareGame[pos]];
            }
        }
    }

    function startGame() {
        squareGame.forEach(function (value, index) {
            let li = document.createElement('li');
            if (value === 0) {
                li.innerText = '';
            } else {
                li.innerText = value;
            }
            li.setAttribute('data-index', value);
            li.style.left = (index % 4) * size + 'px';
            li.style.top = Math.floor(index / 4) * size + 'px';
            li.classList.add('item' + value);
            document.getElementById('square').appendChild(li);
        });
    }

})(jQuery)