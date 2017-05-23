/* Урок 5. Задание 1 */
							
/* Написать функцию преобразования цвета из 10-ного представления в 16-ный.
Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш. 
 */

console.log("Урок 5. Задание 1 ");
 
function convertRgbToHex(red, green, blue) {
    function convertDecToHex(decimal) {
        if (isNaN(decimal)){
            return console.log("Одно (несколько) из введеных значений не является числом");
        }
		if (decimal < 0 || decimal > 255) {
            return console.log("Одно (несколько) из введеных значений вне допустимого диапазона ввода 0-255");
        } 
        return decimal > 15 ? decimal.toString(16).toUpperCase() : "0" + decimal.toString(16).toUpperCase();
    }
	
    return convertDecToHex(red) + convertDecToHex(green) + convertDecToHex(blue);
}

console.log("Цвет в 16-й системе: #" + convertRgbToHex(10,9,255));