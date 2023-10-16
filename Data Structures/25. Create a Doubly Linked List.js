const Node = function (data, prev) {
  this.data = data
  this.prev = prev
  this.next = null
}
const DoublyLinkedList = function () {
  this.head = null
  this.tail = null
  // Only change code below this line
  this.add = function (data) {
    const newNode = new Node(data, this.tail)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  this.remove = function (data) {
    if (this.head === null) return null
    let currentNode = this.head
    while (currentNode !== this.tail) {
      if (currentNode.data === data) {
        if (currentNode === this.head) {
          this.head = currentNode.next
          this.head.prev = null
        } else {
          const prevNode = currentNode.prev
          const nextNode = currentNode.next
          prevNode.next = nextNode
          nextNode.prev = prevNode
        }
      }
      currentNode = currentNode.next
    }
    if (currentNode.data === data) {
      this.tail = currentNode.prev
      this.tail.next = null
    }
  }
  // Only change code above this line
}
