function findLongestWordLength(str) {
    let maxLength = 0;
    const String = str.split(' ')
    for(const word in String){
      if(String[word].length > maxLength){
        maxLength = String[word].length;
      }
    }
    return maxLength;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));