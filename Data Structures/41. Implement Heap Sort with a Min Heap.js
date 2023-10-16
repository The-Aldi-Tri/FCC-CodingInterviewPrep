function isSorted (a) {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) { return false }
  }
  return true
}
// Generate a randomly filled array
function createRandomArray (size = 5) {
  const a = new Array(size)
  for (let i = 0; i < size; i++) { a[i] = Math.floor(Math.random() * 100) }

  return a
}
const array = createRandomArray(25)

const MinHeap = function () {
  // Only change code below this line
  this.heap = [null]

  this.insert = (item) => {
    this.heap.push(item)

    function minHeapUp (index, heap) {
      const parentIndex = Math.floor(index / 2)
      if (heap[index] < heap[parentIndex] && index > 1) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]]
        minHeapUp(parentIndex, heap)
      }
    }

    minHeapUp(this.heap.length - 1, this.heap)
  }

  this.remove = () => {
    const min = this.heap[1]
    this.heap[1] = this.heap.pop()

    function minHeapDown (index, heap) {
      const n = heap.length
      const parentIndex = index
      const leftChildIndex = index * 2
      const rightChildIndex = index * 2 + 1

      if (parentIndex < n && heap[leftChildIndex] < heap[parentIndex]) {
        [heap[leftChildIndex], heap[parentIndex]] = [heap[parentIndex], heap[leftChildIndex]]
        minHeapDown(leftChildIndex, heap)
      }
      if (parentIndex < n && heap[rightChildIndex] < heap[parentIndex]) {
        [heap[rightChildIndex], heap[parentIndex]] = [heap[parentIndex], heap[rightChildIndex]]
        minHeapDown(rightChildIndex, heap)
      }
    }
    minHeapDown(1, this.heap)
    return min
  }
  this.sort = () => {
    const n = this.heap.length
    const sortedArr = []
    for (let i = 0; i < n - 1; i++) {
      sortedArr.push(this.remove())
    }
    return sortedArr
  }

  // Only change code above this line
}

const hiphip = new MinHeap()
hiphip.insert(1)
hiphip.insert(12)
hiphip.insert(31)
hiphip.insert(15)
hiphip.insert(9)
hiphip.insert(19)
console.log(hiphip)
hiphip.remove()
console.log(hiphip)
console.log(hiphip.sort())
