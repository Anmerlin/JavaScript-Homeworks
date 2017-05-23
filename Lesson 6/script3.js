/* Урок 6. Задание со "*" */

/*
Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк 
(названия ключей). Возвращает новый объект, куда вошли все ключи, указанные в 
массиве keys, и соответствующие значения из объекта obj. Если в объекте obj, нет ключа, 
указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.
*/

console.log("Урок 6. Задание со * ");

var user = { 
			name: 'Sergey', 
			age: 30, 
			email: 'sergey@gmail.com', 
			friends: ['Sveta', 'Artem'] 
			};

function pick(obj, keys) {
	var newObject = {};									// создаем пустой объект
	for (var key in obj) {								// цикл для каждого элемента key в принимаемом объекте 
		for ( var i = 0; i <= keys.length; i++){		// цикл для каждого элемента i в массиве строк
			if (key === keys[i]) {						// условие, что свойство объекта равно элементу в массиве
				newObject[key] = obj[key];				// тогда передаем новому объекту свойство и значение принимаемого в качестве 
			};											// аргумента объекта obj
		};
	};
	return newObject;
};

console.log(pick(user, ['name']));
console.log(pick(user, ['name', 'second-name']));
console.log(pick(user, ['name', 'friends']));
