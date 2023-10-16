const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this.root = null
  // Only change code below this line
  this.add = function (value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    }
    let currentNode = this.root
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return null
      } else if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return undefined
        }
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return undefined
        }
        currentNode = currentNode.right
      }
    }
  }
  // Only change code above this line
}
