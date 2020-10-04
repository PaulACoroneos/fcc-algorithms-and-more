const diff = (arr1,arr2) => {
  const diffedA = arr1.filter(val => !arr2.includes(val));
  const diffedB = arr2.filter(val => !arr1.includes(val));
  return [...diffedA,...diffedB];
}

function sym(...args) {
  //base case. array of 1 or less returned? return args
  if(args.length <= 1) return args;
  //otherwise loop through all arrays and reduce unique values to single array
  while(args.length > 1) {
    const arrDiff = diff(args[0],args[1]);
    args = [arrDiff,...args.slice(2)]
  }
  return [...new Set(args[0])];
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
