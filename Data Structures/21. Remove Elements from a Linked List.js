function LinkedList () {
  let length = 0
  let head = null

  const Node = function (element) {
    this.element = element
    this.next = null
  }

  this.size = function () {
    return length
  }

  this.head = function () {
    return head
  }

  this.add = function (element) {
    const node = new Node(element)
    if (head === null) {
      head = node
    } else {
      let currentNode = head

      while (currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    length++
  }

  this.remove = function (element) {
    // Only change code below this line
    if (head.element === element) {
      head = head.next
      length -= 1
      return
    }
    let previousNode = head
    let currentNode = previousNode.next
    while (currentNode.element !== element && currentNode.next !== null) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    if (currentNode.element === element && currentNode.next === null) {
      previousNode.next = null
      length -= 1
      return
    }
    if (currentNode.element === element && currentNode.next !== null) {
      previousNode.next = currentNode.next
      length -= 1
    }
    // Only change code above this line
  }
}
