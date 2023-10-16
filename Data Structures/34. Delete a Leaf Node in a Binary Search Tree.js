const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree () {
  this.root = null
  // Only change code below this line
  this.remove = function (value) {
    if (this.root === null) {
      return null
    }
    let parentNode
    let currentNode = this.root
    while (currentNode && value !== currentNode.value) {
      parentNode = currentNode
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    if (!parentNode) {
      this.root = null
    } else {
      const direction = (parentNode.left === currentNode) ? 'left' : 'right'
      parentNode[direction] = null
    }
  }
}
