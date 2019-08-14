  function date(time) {
  var sdf = new Date(Date.parse(time)); 

      return {
      add: function(param, time) {

        if (time == 'minutes') sdf.setMinutes(sdf.getMinutes() + param);  
        if (time == 'hours') sdf.setHours(sdf.getHours() + param);
        if (time == 'days') sdf.setDate(sdf.getDay() + param);
        if (time == 'months') sdf.setMonth(sdf.getMonth() + param);
        if (time == 'years') sdf.setFullYear(sdf.getFullYear() + param);
        return this;
      },

      subtract: function(param, time){

        if (time == 'minutes') sdf.setMinutes(sdf.getMinutes() - param);  
        if (time == 'hours') sdf.setHours(sdf.getHours() - param);
        if (time == 'days') sdf.setDate(sdf.getDay() - param);
        if (time == 'months') sdf.setMonth(sdf.getMonth() - param);
        if (time == 'years') sdf.setFullYear(sdf.getFullYear() - param);
        return this;
      },
    
    }
  }


var time = date('2017-05-16 13:45')
.add(24, 'hours')

.subtract(1, 'months')

.add(3, 'days')

.add(15, 'minutes');
//console.log(date(['2017-05-16 13:45']));
console.info(time.sdf);

