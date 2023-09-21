function repeatStringNumTimes(str, num) {
    if(num<1){
      return "";
    }
    let result="";
    for(let i=0; i<num; i++){
       result += str;
    }
    console.log(result);
    return result;
  }
  
  repeatStringNumTimes("abc", 3);