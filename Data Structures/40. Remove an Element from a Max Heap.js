const MaxHeap = function () {
  this.heap = []
  this.parent = index => {
    return Math.floor((index - 1) / 2)
  }
  this.insert = element => {
    this.heap.push(element)
    this.heapifyUp(this.heap.length - 1)
  }
  this.heapifyUp = index => {
    let currentIndex = index
    let parentIndex = this.parent(currentIndex)
    while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swap(currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = this.parent(parentIndex)
    }
  }
  this.swap = (index1, index2) => {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }
  this.print = () => {
    return this.heap
  }
  // Only change code below this line
  this.leftChild = (i) => i * 2 + 1
  this.rightChild = (i) => i * 2 + 2

  this.heapifyDown = i => {
    const n = this.heap.length
    const parentIndex = i
    const leftChildIndex = this.leftChild(parentIndex)
    const rightChildIndex = this.rightChild(parentIndex)

    if (parentIndex < n && this.heap[leftChildIndex] > this.heap[parentIndex]) {
      this.swap(leftChildIndex, parentIndex)
      this.heapifyDown(leftChildIndex)
    }
    if (parentIndex < n && this.heap[rightChildIndex] > this.heap[parentIndex]) {
      this.swap(rightChildIndex, parentIndex)
      this.heapifyDown(rightChildIndex)
    }
  }

  this.remove = () => {
    this.heap = [...this.heap]
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return max
  }
  // Only change code above this line
}

const hiphip = new MaxHeap()
hiphip.insert(1)
hiphip.insert(12)
hiphip.insert(31)
hiphip.insert(15)
hiphip.insert(9)
hiphip.insert(19)
console.log(hiphip.print())
hiphip.remove()
console.log(hiphip.print())
