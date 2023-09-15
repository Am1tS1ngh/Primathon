let count = 0;

function cc(card) {
  // Only change code below this line
  if(card>=2 && card <= 6){
    count++;
  }else if(card>=7 && card <= 9){
    count+=0;
  }else {
    switch(card){
      case 10:
        count--;
        break;
      case 'J':
        count--;
        break;
      case 'Q':
        count--;
        break;
      case 'K':
        count--;
        break;
      case 'A':
        count--;
        break;
    }
  }
  if(count<1){
    return count + " Hold";
  }else {
    return count + " Bet";
  }
    

 return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');