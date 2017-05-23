/* Урок 5. Задание со "*" */

/* Реализовать функцию objectToQueryString(obj), которая принимает аргументом объект, 
возвращает строку.
Примеры работы: 
console.log(objectToQueryString({user: 'Dmitry'})); // user=Dmitry 
console.log(objectToQueryString({user: 'Dmitry', password: 'pass'})); // user=Dmitry&password=pass
console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id=1})); // user=Dmitry&password=pass&id=1  
*/

console.log("Урок 5. Задание со * ");

function objectToQueryString(obj){				  // Определяем свойства объекта ввиде массива с помощью метода Object.keys(obj)
	return Object.keys(obj).map(function(prop) {  // Метод map используем для трансформации массива, путем создания нового из результатов вызова
			return prop + "=" + obj[prop];		  // function(prop), где prop принимает свойство объекта, и склеиваем свойство и его значение   
			}).join("&");						  // Метод join склеивает массив в строку, используя & как разделитель (если в obj более 1 свойства)
}

console.log(objectToQueryString({user: "Dmitry"}));
console.log(objectToQueryString({user: "Dmitry", password: "pass"}));
console.log(objectToQueryString({user: "Dmitry", password: "pass", id:1}));