/* Урок 2. Разобрать пример */

var a = 2; 				// определяем переменную и присваиваем ей значение
var x = 1 + (a *= 2); 
/* действия в скобках имееют больший приоритет, то внутри них сначала значение переменной "a" умнажаем на 2 и вновь полученное значение присваеваем "a" (a = a*2), далее идет сложение и в результате переменной "x" присваевается значение 5  */
alert(x);

alert('Второй скрипт отработал, приступаем к выполнению третьего');
