function anagrams(word, words) {
  let result = [];
  for(let element in words){
    if(words[element].length == word.length){
      if(word.split('').sort().join() == words[element].split('').sort().join()){
        result.push(words[element]);
      }
    }
  }
  return result;
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
