/* function mutation([elem1, elem2]) {
        const regex = new RegExp(`[^${elem1}]`, 'i');
        return !regex.test(elem2);
    }
*/
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);