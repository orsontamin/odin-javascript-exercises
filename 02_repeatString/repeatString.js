const repeatString = function(word, num) {
  let newWords = '';

  if(num >= 0){
  for (let i = 0; i < num; i++){
    newWords += word;
  }
} else {
  newWords = "ERROR";
}

  return newWords;
};

// Do not edit below this line
module.exports = repeatString;
