/* Урок 3. Задание 2 */

/*Напишите цикл, который выводит такой треугольник:  
# 
## 
### 
#### 
##### 
###### 
#######

*/

 // для строковых данных используем .length, чтобы узнать ее длину
for (var x='#'; x.length <= 7; x+='#'){ // определяем строковую переменную, ставим условие что ее длина не должна превышать 7, задаем шаг x=x+'#'
	console.log(x);
}

// варианты через циклы while, и do.. while

/*
var x = '#';
while (x.length<=7){
	console.log(x);
	x+='#';
}
*/

/*
var x = '#';
do{
	console.log(x);
	x+='#';
} while (x.length<=7)
*/