/* Урок 7. Задания 1, 2, 3* */

/*
* Задание 1
* Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-тэги по своему желанию.
* Доска должна быть разленована соответствующим образом, т.е. чередовать черные и белые ячейки.
* Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*
* Задание 2
* Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-король, Ф – ферзь и тп.,
* причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*
* Задание 3*
* Заменить буквы, обозначающие фигуры картинками.
*/

function createChessBoard(){
	var board = document.createElement('table');
		document.body.append(board);
		
	for(var i = 0; i < 8; i++){
        var tr = document.createElement('tr');
        if (i==0){
            for (var j = 0; j < 9; j++){
                var td = document.createElement('td'), letters = ['','A','B','C','D','E','F','G','H'];
					td.className = "whitecell marking";
					td.innerText = letters[j];
					tr.append(td);
            };
            board.append(tr);
        };
        
        var tr = document.createElement('tr');
			tr.className = "whitecell marking";
			tr.innerText = i+1;
			board.appendChild(tr);                
        for(var k = 0; k < 8; k++){
           var td = document.createElement('td');
				td.className = ((i+k)%2 == 0) ? "blackcell" : "whitecell";
            if (i < 2){
				td.innerText = [0,7].indexOf(i)!=-1 ? 
							   [0,7].indexOf(k)!=-1 ? "\u2656" :
							   [1,6].indexOf(k)!=-1 ? '\u2658' :
							   [2,5].indexOf(k)!=-1 ? '\u2657' :
							   (k==3) ? '\u2655' : '\u2654':
							   [1,6].indexOf(i)!=-1 ? '\u2659' : '';
            } else {
				td.innerText = [0,7].indexOf(i)!=-1 ? 
							   [0,7].indexOf(k)!=-1 ? '\u265c' :
							   [1,6].indexOf(k)!=-1 ? '\u265e' :
							   [2,5].indexOf(k)!=-1 ? '\u265d' :
							   (k==3) ? '\u265b' : '\u265a' :
							   [1,6].indexOf(i)!=-1 ? '\u265f' : '';
            };
            tr.append(td);
        };
        board.appendChild(tr);
    };
	return board;
};

var chessboard = createChessBoard();
	document.body.append(chessboard);