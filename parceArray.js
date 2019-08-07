//Массив подаваемый на вход
var arr = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming', 'web'];
var str = [];

//Все элементы массива приводим к нижнему регистру
arr.forEach(function(element,index) { 
    arr[index] = arr[index].toLowerCase();

    if(!str.includes(arr[index])) str.push(arr[index]);
});

//Выводим в консоль уже объединенные элементы массива в строку
console.log(str.join(', '));
