function alphabetPosition(text) {
    let alph = [ '', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
    let numarr = '';
    
    text = text.toLowerCase();

    function swit(element){
        if(alph.indexOf(element) != '-1'){ 
        numarr = numarr + ' ' + alph.indexOf(element);
        numarr = numarr.trim();
        } 
    }
    text.split('').forEach(swit);
    return numarr;
  }

  console.log(alphabetPosition('The quick brown fox jumps over the lazy dog.'));
