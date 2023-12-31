const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this.root = null
  // Only change code below this line
  this.isPresent = function (value) {
    if (this.root === null) {
      return false
    }
    let currentNode = this.root
    while (currentNode !== null) {
      if (value === currentNode.value) {
        return true
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      }
    }
    return false
  }
  // Only change code above this line
}
