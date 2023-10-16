const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this.root = null
  // Only change code below this line
  this.findMin = function () {
    if (this.root === null) {
      return null
    }
    let currentNode = this.root
    while (currentNode !== null) {
      if (currentNode.left === null) {
        return currentNode.value
      }
      currentNode = currentNode.left
    }
  }
  this.findMax = function () {
    if (this.root === null) {
      return null
    }
    let currentNode = this.root
    while (currentNode !== null) {
      if (currentNode.right === null) {
        return currentNode.value
      }
      currentNode = currentNode.right
    }
  }
  // Only change code above this line
}
