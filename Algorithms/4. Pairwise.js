function pairwise (arr, arg) {
  const n = arr.length
  const pairNum = []
  const pairIdx = []
  const usedIdx = []
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === arg && !usedIdx.includes(i) && !usedIdx.includes(j)) {
        pairNum.push([arr[i], arr[j]])
        pairIdx.push([i, j])
        usedIdx.push(j)
        break
      }
    }
  }
  return pairIdx.reduce((sum, item) => {
    sum += (item[0] + item[1])
    return sum
  }, 0)
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
