// Best performance (fastest)
function selectionSort (array) {
  const n = array.length
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j
      }
    }
    [array[minIdx], array[i]] = [array[i], array[minIdx]]
  }
  return array
}

// First try (89.22% slower)
function mySelectionSort (array) {
  const sorted = []
  while (array.length > 0) {
    const min = Math.min(...array)
    sorted.push(min)
    const idx = array.indexOf(min)
    array = [...array.slice(0, idx), ...array.slice(idx + 1)]
  }
  return sorted
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

console.log(mySelectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
