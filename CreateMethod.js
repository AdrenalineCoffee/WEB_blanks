  function date(date) {
    var sdf = new Date(Date.parse(date)); 

    return {
    add: function(param, time) {
        if(param >=0 ){
      switch(time){
        case ('minutes'): sdf.setMinutes(sdf.getMinutes() + param);  break; 
        case ('hours'): sdf.setHours(sdf.getHours() + param); break;
        case ('days'): sdf.setHours(sdf.getHours() + param*24); break;
        case ('months'): sdf.setMonth(sdf.getMonth() + param); break;
        case ('years'): sdf.setFullYear(sdf.getFullYear() + param); break;
        default: throw new TypeError('Неизвестная единица времени');
      }
      return this;
    }
    else{ throw new TypeError('Время не может быть отрицательным!');}
    },

    subtract: function(param, time){
        if(param >=0 ){
      switch(time){
        case ('minutes'): sdf.setMinutes(sdf.getMinutes() - param);   break;
        case ('hours'): sdf.setHours(sdf.getHours() - param); break;
        case ('days'): sdf.setHours(sdf.getHours() - param*24); break;
        case ('months'): sdf.setMonth(sdf.getMonth() - param); break;
        case ('years'): sdf.setFullYear(sdf.getFullYear() - param); break;
        default: throw new TypeError('Неизвестная единица времени');
      }
      return this;
    }
    else{ throw new TypeError('Время не может быть отрицательным!');}
    },
    get value() {
      //2017-04-20 14:00
      var d = sdf,
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = '' + d.getFullYear(),
          hour = '' + d.getHours(),
          minute = '' + d.getMinutes();


      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      if (hour.length < 2) hour = '0' + hour;
      if (minute.length < 2) minute = '0' + minute;

      var fullyear = [year, month, day].join('-');
      var fulltime = [hour, minute].join(':');
      return fullyear + " " + fulltime;

  },
  
  }
  }


var time = date('2017-05-16 13:45')
.add(24, 'hours')

.subtract(1, 'months')

.add(3, 'days')

.add(15, 'minutes');
//console.log(date(['2017-05-16 13:45']));
console.info(time.value);

