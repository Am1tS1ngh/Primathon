function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    console.log(arr.indexOf(num))
    return arr.indexOf(num);;
  }
  getIndexToIns([2, 5, 10, 15], 15);