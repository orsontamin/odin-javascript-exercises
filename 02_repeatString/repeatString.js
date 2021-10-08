const repeatString = function(word, num) {
  let newWords = '';

  if (num < 0){
    throw new RangeError("ERROR");
  }

  for (let i = 0; i < num; i++){
    newWords += word;
  }
  return newWords;
};

// Do not edit below this line
module.exports = repeatString;
