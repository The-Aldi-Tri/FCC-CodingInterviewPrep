function LinkedList () {
  let length = 0
  let head = null

  const Node = function (element) {
    this.element = element
    this.next = null
  }

  this.head = function () {
    return head
  }

  this.size = function () {
    return length
  }

  this.add = function (element) {
    // Only change code below this line
    const newNode = new Node(element)
    if (head === null) {
      head = newNode
    } else {
      let currentNode = head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
    length += 1
    // Only change code above this line
  }
}
