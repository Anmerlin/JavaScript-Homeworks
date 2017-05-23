/* Урок 3. Задание 1 */
							
/* for (var x = 1; x <= 100; x++){
	if (x%3===0 && x%5!=0){
		console.log('Fizz');
	} else if (x%3!=0 && x%5===0){
		console.log('Buzz');
	} else if (x%3===0 && x%5===0){
		console.log('FizzBuzz');
	} else{
		console.log(x);
	}
}

alert('Cкрипт отработал, результаты выведены в консоль'); */

/* Владея навыками написания циклов и условных операторов, выполните задание со * из урока 2, используя тернарный оператор */

for (var x = 1; x <= 100; x++){						
	var y = (x%3===0 && x%5!=0)?'Fizz':
			(x%3!=0 && x%5===0)?'Buzz':
			(x%3===0 && x%5===0)?'FizzBuzz':
			x;
	console.log(y);
}

// или как вариантs:

/* for (var x = 1; x <= 100; x++){					
	(x%3===0 && x%5!=0)?console.log('Fizz'):
	(x%3!=0 && x%5===0)?console.log('Buzz'):
	(x%3===0 && x%5===0)?console.log('FizzBuzz'):
	console.log(x);
} */