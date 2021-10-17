const reverseString = function(str) {
  let newWord = "";
  let newStr = str;

  for(let i=newStr.length - 1; i >= 0; i--){
    newWord += newStr[i];
  }
  return newWord;
};

// Do not edit below this line
module.exports = reverseString;
