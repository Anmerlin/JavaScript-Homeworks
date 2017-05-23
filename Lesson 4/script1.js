/* Урок 4. Задание 1 */
							
/* Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них */

// вариант с тернарным оператором
console.log("Урок 4. Задание 1 ");

function min(x, y) {
	var z = (x < y)?x:y;
	return z;
}
console.log(min(0, 10));	// 0
console.log(min(0, -10));	// -10

// вариант с if ... else
console.log("Урок 4. Задание 1. Вариант с if ... else");

function min(x, y) {
	if (x < y) {
		return x;
	} else {
		return y;
	}
}
console.log(min(0, 10));	// 0
console.log(min(0, -10));	// -10