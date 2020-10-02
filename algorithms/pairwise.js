function pairwise(arr, arg) {
  //base case 1. array too small
  if(arr.length <= 1) return 0;
  //base case 2. Exactly 2 entries
  if( arr.length === 2) return arr[0] + arr[1] === arg ? 1 : 0;

  //otherwise lets loop for each element and check if another element sums to args
  const pairedIndices = [];
  for(let i=0; i <arr.length; i++) {
    //if we have already used this index, skip using continue
    if(pairedIndices.includes(i)) continue;
    for(let j = i+1; j < arr.length; j++) {
    if(pairedIndices.includes(j)) continue;
      if(arr[i]+arr[j] === arg) {
        pairedIndices.push(i,j)
        break;  //skip remainder of loop, we found a pair
      }
    }
  }
   return pairedIndices.reduce((accum,current) => {
    accum += current;
    return accum;
  },0);
}

pairwise([0, 0, 0, 0, 1, 1], 1)
