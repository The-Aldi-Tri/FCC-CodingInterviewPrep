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

  // Only change code below this line
  this.removeAt = function (index) {
    if (index < 0 || index >= length) {
      return null
    }
    if (head === null) {
      return null
    }
    if (index === 0) {
      const removed = head
      head = head.next
      length -= 1
      return removed.element
    }
    let previousNode = head
    let currentNode = previousNode.next
    let currentIndex = 1
    while (currentIndex < index) {
      if (currentNode.next === null) {
        return null
      }
      previousNode = previousNode.next
      currentNode = currentNode.next
      currentIndex += 1
    }
    if (currentNode.next !== null) {
      previousNode.next = currentNode.next
      length -= 1
      return currentNode.element
    } else {
      previousNode.next = null
      length -= 1
      return currentNode.element
    }
  }
  // Only change code above this line
}
