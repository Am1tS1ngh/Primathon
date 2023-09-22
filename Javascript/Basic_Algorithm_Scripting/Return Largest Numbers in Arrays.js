function largestOfFour(arr) {
    let result = []
    for (const subarr in arr) {
      let largestNum = arr[subarr][0];
      for (const element in arr[subarr]) {
        if(arr[subarr][element] > largestNum){
          largestNum = arr[subarr][element];
        }
      }
      result.push(largestNum);
    }
    console.log(result)
    return result;
  }
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);