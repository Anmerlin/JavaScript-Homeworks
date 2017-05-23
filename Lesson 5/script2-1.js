/* Урок 5. Задание 2 */

/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы 
должны получить на выходе объект, в котором в соответствующих свойствах описаны 
единицы, десятки и сотни. Например для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

console.log("Урок 5. Задание 2");

function numberToObject(n) {
	var number = {};
	var prop = ["единицы", "десятки", "сотни"];
	
    if (isNaN(n)) {
      console.log("Параметр не является числом");
    }
	if (n < 0 || n > 999) {
        console.log("Допустимый диапазон ввода 0-999");
		return number;
    } 	
	for (var i = 0; i < prop.length; i++) {				
			number[prop[i]] = n % 10 || 0;				// присваиваем свойству "единицы" последнее число, так как отсчет идет справа налево
			n = (n - n%10) / 10;						// уменьшаем разряд числа и при необходимости повторяем цикл
		}
    return number;
 }

console.log(numberToObject(0)); 
console.log(numberToObject(3)); 
console.log(numberToObject(10));
console.log(numberToObject(231));
console.log(numberToObject(1001));
//--------------------------------------------------------
function numberToObject(n) {
    var number = {};
    var prop = ["единицы", "десятки", "сотни"];
	
    if (isNaN(n)) {
      console.log("Параметр не является числом");
    }
    
    if (n < 0 || n > 999) {
        console.log("Допустимый диапазон ввода 0-999");
        return number;
    }
    
		for (var i = 0; i < prop.length; i++) {  // при n не равным 0
        number[prop[i]] = n % 10;				// присваиваем свойству "единицы" последнее число, так как отсчет идет справа налево
        n = parseInt(n / 10);					// уменьшаем разряд числа и при необходимости повторяем цикл
		}
	
    return number;
 }

console.log(numberToObject(0)); 
console.log(numberToObject(3)); 
console.log(numberToObject(10));
console.log(numberToObject(231));
console.log(numberToObject(1001));