/* Урок 6. Задание 2 */

/*
Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как 
аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как 
оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
*/

console.log("Урок 6. Задание 2");

// используем стандартный метод reverse
/*
function reverseArray(array) {
	return array.reverse();
};
*/
// через цикл и push - работает быстрее, так как добавляет элементы в конец массива
function reverseArray(array) {
	var revArr = [];
	for (var i = array.length - 1; i >= 0; i--) {
		revArr.push(array[i]);		
	};
	return revArr;
};

// через цикл и unshift - работает медленнее, так как добавляет элементы в начало массива при этом сдвигая другие элементы и меняя их индекс
/*
function reverseArray1(array) {
	var revArr = [];
	for (var i in array) {
		revArr.unshift(array[i]);
	};
	return revArr;
};
*/

// извращенный метод
function reverseArrayInPlace(array){
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		var lastArray = array[i];
			array[i] = array[array.length - 1 - i];
			array[array.length - 1 - i] = lastArray;
	}
	return array;
};

console.log(reverseArray([1, "a", 2, "b", 3, "c"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));