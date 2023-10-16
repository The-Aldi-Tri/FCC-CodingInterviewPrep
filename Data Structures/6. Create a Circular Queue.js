class CircularQueue {
  constructor (size) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }

  print () {
    return this.queue
  }

  enqueue (item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item
      this.write++
      if (this.write > this.max) this.write = 0
      return item
    }
    return null
  }

  dequeue () {
    if (this.queue[this.read] !== null) {
      const dq = this.queue[this.read]
      this.queue[this.read] = null
      this.read++
      if (this.read > this.max) this.read = 0
      return dq
    }
    return null
  }
}
