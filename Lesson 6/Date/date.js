//Сегодня 13 марта 2017 года, понедельник, 21 час 35 минут 54 секунды
'use strict'
 function getDateNow(){
	 'use strict'
    var now = new Date(); // !!! здесь была основная ошибка: не было скобок ()
    var date = now.getDate();//число месяца
    //Получение месяца
    var month = "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(','); 
    var monthWord = month[now.getMonth()]; 
	//Получение года
    var year = now.getFullYear();
	//Получение дня недели
    var dayWeek = "понедельник,вторник,среда,четверг,пятница,суббота,воскресенье".split(",");
    var dayWeekWord = dayWeek[now.getDay()-1];
    //Получаем часы, минуты и секунды
    var hourWord, minuteWord, secondWord;
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    
    var h = hour;
	var hr; // !!! объявляем переменную
    hourWord = (((hr=h%100)>=11 && hr<=19) || (hr=h%10)>=5 || hr==0) ? 'часов':((hr==1) ? 'час':'часа');
    
    var m = minute;
	var min; // !!! объявляем переменную		  
    minuteWord = (((min=m%100)>=11 && min<=19) || (min=m%10)>=5 || min==0) ? 'минут':((min==1) ? 'минута':'минуты');
            
    var s = second;
	var sec; // !!! объявляем переменную
    secondWord = (((sec=s%100)>=11 && sec<=19) || (sec=s%10)>=5 || sec==0) ? 'секунд':((sec==1) ? 'секунда':'секунды');
    
    console.log('Сегодня ' + date + ' ' + monthWord + ' ' + year + ' года, ' + dayWeekWord + ', ' + hour + ' ' + hourWord + ' ' + minute + ' ' + minuteWord + ' ' + second + ' ' + secondWord);         
 };
 setInterval(getDateNow,1000);

// Интересный вариант	  
/*
function getDateNow(){
	var now = new Date();
	var options = {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					weekday: 'long',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				};
	return console.log("Сегодня " + now.toLocaleString("ru", options));
};
setInterval(getDateNow,1000);
*/