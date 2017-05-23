/* Урок 4. Задание 2 */

/*
Символ номер N строки можно получить, добавив к ней .charAt(N) ("строчка".charAt(5))– схожим образом с получением длины строки при помощи .length.
Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, "к"). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции еѐ символов будут 0 и 1.
	Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов ― "B",
содержащихся в строке.
	Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр —
символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов "B").
Для этого переделайте функцию countBs.
*/
console.log("Урок 4. Задание 2. Функция countChar");

var letter = "B";
var str = "BamBarBia";
function countChar(str, letter) {
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if (str.charAt(i) === letter){
			++count;
		}
	}
	return count;	
}
console.log("Количество символов \""+ letter + "\": " + countBs(str));

console.log("Урок 4. Задание 2. Функция countBs");

function countBs(str) {
	return countChar(str, letter);
}
console.log("Количество символов \""+ letter + "\" в слове " + str + ": " + countBs(str));

// Задание для себя
// Функция для определения места буквы в слове

console.log("Урок 4. Самостоятельная работа: функция для определения места буквы в слове");

var letter = "и";
var str = "эквилибристика";
function posChar(str) {
	var pos = "";
	for (var count = 0; count < str.length; count++){
		if (str.charAt(count) === letter){
			pos += ++count + "-й, ";
		}
	}
	return pos;	
}
console.log("Символ \""+ letter + "\" находится в слове " + str + " на " + posChar(str) + "позиции");