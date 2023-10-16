const MaxHeap = function () {
  // Only change code below this line
  this.heap = [null]

  this.print = () => [...this.heap]

  const leftChildIndex = (i) => i * 2
  const rightChildIndex = (i) => i * 2 + 1
  const parentIndex = (i) => Math.floor(i / 2)

  this.insert = (item) => {
    this.heap.push(item)
    let itemIdx = this.heap.length - 1
    let parentIdx = parentIndex(itemIdx)
    while (itemIdx > 1 && item > this.heap[parentIdx]) {
      [this.heap[itemIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[itemIdx]]
      itemIdx = parentIdx
      parentIdx = parentIndex(itemIdx)
    }
  }
  // Only change code above this line
}
