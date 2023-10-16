function binarySearch (arr, x) {
  let left = 0
  let right = arr.length - 1
  let mid
  const path = []
  while (right >= left) {
    mid = left + Math.floor((right - left) / 2)
    path.push(arr[mid])
    if (arr[mid] === x) {
      return path
    } else if (arr[mid] > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return 'Value Not Found'
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
]

console.log(binarySearch(testArray, 1))
