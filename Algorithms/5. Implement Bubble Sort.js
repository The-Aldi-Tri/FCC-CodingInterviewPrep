function bubbleSort (array) {
  const n = array.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]]
      }
    }
  }
  return array
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
