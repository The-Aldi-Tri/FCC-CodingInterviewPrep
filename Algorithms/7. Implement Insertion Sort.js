// Best performance (fastest)
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }
  return arr
}

// First try (28.06% slower)
function myInsertionSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let j = i + 1
      while (array[j - 1] > array[j]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
        j--
      }
    }
  }
  return array
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

console.log(myInsertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
