function checkSet (arrToBeSet, checkValue) {
  // Only change code below this line
  const set = new Set(arrToBeSet)
  const isThere = set.has(checkValue)
  const size = set.size
  return [isThere, size]
  // Only change code above this line
}

console.log(checkSet([4, 5, 6], 3))
