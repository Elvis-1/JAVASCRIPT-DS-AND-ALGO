
function fn1(array, target, low = 0, high = array.length - 1) {
    let mid;
    while (low <= high) {
      mid = ( low + high ) / 2; 
      console.log('this is low' + low + 'this is high '+ high + 'and mid '+  mid);
      if ( target < array[mid] )
      {
        high = mid - 1; 
      } else if(target > array[mid])
      {
        low = mid + 1;
        console.log('this is low ' + low);
      }

      else break;
    }
    return mid;
}

function missingNum( array, num){
  if(num <= 0)
  {
    return false;
  }

  var hash = array.fill(false, 0, num+1);
  for(var i=0; i<num;i++)
  {
    hash[array[i]] = true; 
  }
  for(var i = 1; i<=num; i++)
  {
    if(!hash[i])
    {
      return i;
    }
    
  }
  return num + 1;
}

console.log(missingNum([1,2,3,5],5));



