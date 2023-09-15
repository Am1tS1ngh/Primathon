function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
      return [];
    }else{
      const answer = rangeOfNumbers(startNum,endNum-1);
      answer.push(endNum);
      return answer;
    }
  };
  