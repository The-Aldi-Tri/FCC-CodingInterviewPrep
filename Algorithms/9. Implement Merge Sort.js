function merge (arr, l, m, r) {
  const nLeft = m - l + 1
  const nRight = r - m

  const leftArr = arr.slice(l, l + nLeft)
  const rightArr = arr.slice(m + 1, m + 1 + nRight)

  let i = 0
  let j = 0
  let k = l

  while (i < nLeft || j < nRight) {
    if (i >= nLeft) {
      for (let a = j; a < nRight; a++) {
        arr[k] = rightArr[a]
        k++
      }
      break
    }

    if (j >= nRight) {
      for (let a = i; a < nLeft; a++) {
        arr[k] = leftArr[a]
        k++
      }
      break
    }

    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i]
      i++
    } else {
      arr[k] = rightArr[j]
      j++
    }
    k++
  }
}

function ms (arr, l, r) {
  if (l >= r) return
  const m = l + parseInt((r - l) / 2)
  ms(arr, l, m)
  ms(arr, m + 1, r)
  merge(arr, l, m, r)
  return arr
}

function mergeSort (arr) {
  const l = 0
  const r = arr.length - 1
  const sorted = ms(arr, l, r)
  return sorted
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))
