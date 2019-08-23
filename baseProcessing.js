var friends = [
  {
      name: 'Сэм',
      gender: 'Мужской',
      email: 'luisazamora@example.com',
      favoriteFruit: 'Картофель'
  },
  {
      name: 'Эмили',
      gender: 'Женский',
      email: 'example@example.com',
      favoriteFruit: 'Яблоко'
  },
  {
      name: 'Мэт',
      gender: 'Мужской',
      email: 'danamcgee@example.com',
      favoriteFruit: 'Яблоко'
  },
  {
      name: 'Брэд',
      gender: 'Мужской',
      email: 'newtonwilliams@example.com',
      favoriteFruit: 'Банан'
  },
  {
      name: 'Шерри',
      gender: 'Женский',
      email: 'danamcgee@example.com',
      favoriteFruit: 'Картофель'
  },
  {
      name: 'Керри',
      gender: 'Женский',
      email: 'danamcgee@example.com',
      favoriteFruit: 'Апельсин'
  },
  {
      name: 'Стелла',
      gender: 'Женский',
      email: 'waltersguzman@example.com',
      favoriteFruit: 'Картофель'
  }
];


function query(collection) {
  var massLib = [].slice.call(arguments);
  var finalArray = collection;

  for (i = 1; i < massLib.length; i++) {
    if (massLib[i].name == 'filterIn') {
        finalArray = massLib[i].act(finalArray);
    }
}

for (i = 1; i < massLib.length; i++) {
    if (massLib[i].name == 'select') {
        finalArray = massLib[i].act(finalArray);
    }
}
return finalArray;
}


function select() {
  var fields = [].slice.call(arguments);
  return{
    name: 'select',
    act: function (inputArr){
      var result = [];
      
      for(var i = 0; i < fields.length; i++){
        if(inputArr[0][fields[i]] === undefined) {
          fields.splice(i, 1);
        }
      }
      function sort(element){
      var tag = {};
      for(var i = 0; i< fields.length; i++){
          tag[fields[i]] = element[fields[i]];
      }
      result.push(tag);
      }
      inputArr.forEach(sort);
      return result;
    }
  }
}


function filterIn(property, values) {
  var fields = [].slice.call(arguments[1]);
  return{
    name: 'filterIn',
    act: function (inputArr){
        var result = [];
        function sort(element){
          for( var i = 0; i < fields.length; i++){
            if(element[property] == fields[i]){
              result.push(element);
            }
          }
        }
        inputArr.forEach(sort);
        return result;
      }
    }
}


console.log(query(friends, select('name', 'gendere', 'email')));
//console.log(select('name', 'gender').act(friends));
