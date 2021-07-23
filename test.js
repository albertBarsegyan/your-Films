function sumArrays(arr1, arr2) {
  const longestArr = arr1.length > arr2.length ? arr1 : arr2;
  const smallestArr = arr1.length > arr2.length ? arr2 : arr1;
  return longestArr.reduce((acc, item, index) => {
    if (smallestArr[index]) {
      return acc + item + smallestArr[index];
    }
    return acc + item;
  }, 0);
}
console.log(sumArrays([1, 2], [3, 4]));