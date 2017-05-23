/* Урок 6. Задание 1 */
	
/*
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3],
а также функцию listToArray, которая создаёт массив из списка.
Также напишите вспомогательную функцию prepend, которая получает элемент и создаѐт новый список,
где этот элемент добавлен спереди к первоначальному списку, и функцию nth, 
которая в качестве аргументов принимает список и число, а возвращает элемент на заданной 
позиции в списке, или же undefined в случае отсутствия такого элемента 
 */

console.log("Урок 6. Задание 1");
 
function arrayToList(array) {
	var list = null;										// создаем пустой список
	for (var i = array.length - 1; i >= 0; i--) {			// запускаем цикл с понижением
		list = {											// формируем список
				value: array[i],
				rest: list
				};		
	};
   return list;
};
	
function listToArray(list){
	var array = [];											// создаем пустой массив
	for (var index = list; index; index = index.rest) {		// формируем цикл, где начальное значение index = list, а шаг index = index.rest
		array.push(index.value);							// в конец пустого массива передаем данные
	};
	return array;
};

function prepend(value, list) {
	return {												// сразу формируем список, например 3, prepend(2, prepend(1, null)))
			value: value,
			rest: list
			};
};

function nth(list, number) {								// в качестве аргументов список и число, реализуем условие через тернарный оператор
	return (!list) ? undefined:								// 1-е условие, возвращает undefined в случае отсутствия элемента в списке
		   (number === 0) ? list['value']:					// 2-е условие, возвращает 1-й элемента в списке
		   nth(list.rest, number - 1);						// иначе вновь вызываем функцию, далее движемся по списку и понижаем число (рекурсия)
};

console.log(arrayToList([1, 2, 3]));
console.log(arrayToList([-1, 0, 1]));

console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));
console.log(listToArray(arrayToList([-1, -2, 0, 4, 5])));

console.log(prepend(1, null));
console.log(prepend(3, prepend(2, prepend(1, null))));
console.log(prepend(-1, prepend(0, prepend(1, null))));

console.log(nth(arrayToList([-1, 0, 1, 2, 3]), 0));
console.log(nth(arrayToList([-1, 0, 1, 2, 3]), 5));