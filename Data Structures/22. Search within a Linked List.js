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
    let currentNode = head
    let previousNode
    if (currentNode.element === element) {
      head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }

      previousNode.next = currentNode.next
    }

    length--
  }

  // Only change code below this line
  this.isEmpty = function () {
    return (head === null)
  }
  this.indexOf = function (element) {
    if (head === null) {
      return -1
    }
    let index = 0
    let currentNode = head
    while (currentNode.element !== element) {
      if (currentNode.next === null) {
        return -1
      }
      currentNode = currentNode.next
      index += 1
    }
    return index
  }
  this.elementAt = function (index) {
    if (head === null) {
      return undefined
    }
    let currentNode = head
    let currentIndex = 0
    while (currentIndex < index) {
      if (currentNode.next === null) {
        return undefined
      }
      currentNode = currentNode.next
      currentIndex += 1
    }
    return currentNode.element
  }
  // Only change code above this line
}
