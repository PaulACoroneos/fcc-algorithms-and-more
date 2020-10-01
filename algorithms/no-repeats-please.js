function permAlone(str) {
  const perms = [];
  const strArr = str.split("");

  const swapIndices = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  const generate = (k, heapArr) => {
    //base case
    if (k === 1) {
      perms.push([...heapArr]);
      return;
    }

    generate(k - 1, heapArr);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        swapIndices(heapArr, i, k - 1);
      } else {
        swapIndices(heapArr, 0, k - 1);
      }
      generate(k - 1, heapArr);
    }
  };

  //generate all perms (including dupes)
  generate(strArr.length, [...strArr]);

  //return array with dupes filtered
  return perms.reduce((accum, current) => {
    const noRepeats = current.every((char, idx) => char !== current[idx - 1]);
    if (noRepeats) accum.push(current);
    return accum;
  }, []).length;
}

permAlone("aabb");
