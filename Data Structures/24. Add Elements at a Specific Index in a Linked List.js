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
  this.addAt = function (index, element) {
    if (index > length - 1 || index < 0) {
      return false
    }
    const newNode = new Node(element)
    if (index === 0) {
      newNode.next = head
      head = newNode
    } else {
      let previousNode = head
      let currentNode = previousNode.next
      let currentIndex = 1
      while (currentIndex < index) {
        if (currentNode.next === null) {
          return false
        }
        currentIndex += 1
        previousNode = previousNode.next
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      previousNode.next = newNode
    }
    length += 1
  }
  // Only change code above this line
}
