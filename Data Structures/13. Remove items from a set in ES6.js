function checkSet () {
  // Only change code below this line
  const set = new Set([1, 2, 3, 4, 5])
  set.delete(2)
  set.delete(5)
  // Only change code above this line
  return set
}

console.log(checkSet())
