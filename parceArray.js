//Массив подаваемый на вход
var str = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming', 'web'];


//Все элементы массива приводим к нижнему регистру
str.forEach(function(element,index) { 
    str[index] = str[index].toLowerCase();
});

//Находим элементы с повторяющимися значениями и удаляем их
str.forEach(function(element, index) 
{ 
    if(str.indexOf(element) != index) {
        delete str[index];
    }
});

//Этой функцией вырезаем удаленные элементы из нашего массива
function filtunef(value, index){
    if (value === undefined)  
    {
        console.log(index);
        str = str.splice(index, 1);
        return str;
    }
    else return str;
}

//Фильтруем от пустых элементов
str = str.filter(filtunef);

console.log(str.join(', '));
