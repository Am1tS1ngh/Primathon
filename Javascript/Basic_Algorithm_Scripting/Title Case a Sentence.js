function titleCase(str) {
    let arrOfWords = str.split(" ");
    for(const word in arrOfWords) {
      arrOfWords[word] = arrOfWords[word].toLowerCase();
      let wordtoTitle = arrOfWords[word].split("");
      wordtoTitle[0] = wordtoTitle[0].toUpperCase();
      arrOfWords[word] = wordtoTitle.join("")
    }
    
    return arrOfWords.join(" ");
  }
  
  titleCase("I'm a little tea pot");