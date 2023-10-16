const Node = function (data, prev) {
  this.data = data
  this.prev = prev
  this.next = null
}
const DoublyLinkedList = function () {
  this.head = null
  this.tail = null
  // Only change code below this line
  this.reverse = function () {
    if (this.head === null) {
      return null
    }
    let currentNode = this.tail
    this.head = currentNode
    while (currentNode !== null) {
      [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev]
      if (currentNode.next === null) {
        this.tail = currentNode
      }
      currentNode = currentNode.next
    }
  }
  // Only change code above this line
}
