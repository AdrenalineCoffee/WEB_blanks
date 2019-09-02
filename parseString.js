//Входящая строка
let twit = 'Прохожу курс на #coursera по #javascript';

//Функция определяет наличие # в начале выбранного слоя
function istwit(value) {
    if(value.startsWith('#')) {
        let res = value.slice(1, value.length);
        return res;
    }
}

//Парсим входящую строку на слова и ищем слова с #
let result = twit.split(' ').filter(istwit);

//У каждого слова с # удаляем в начале #
result.forEach(function(element, index) { 
    result[index] = result[index].slice(1, result[index].length);
});

console.log(twit);
console.log(result);
