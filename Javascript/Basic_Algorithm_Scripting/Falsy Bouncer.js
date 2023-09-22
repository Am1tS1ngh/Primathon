function bouncer(arr) {
    let localArray = [];
    const FalsyValues = [false, null, 0, NaN, undefined, ""];
    for(let i = 0; i < arr.length; i++) {
      if(FalsyValues.includes(arr[i])){
        continue;
      }
      localArray.push(arr[i]);
    }
    return localArray;
  }
  
  bouncer([7, "ate", "", false, 9]);