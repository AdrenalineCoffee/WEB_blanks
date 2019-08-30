String.prototype.camelCase=function(){
if(this =='') return '';
 else return this.trim().split(' ').map(function(elem) { return  elem[0].toUpperCase() + elem.substr(1);}).join('')
}
