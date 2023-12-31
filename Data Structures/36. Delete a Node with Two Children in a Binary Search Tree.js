const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree () {
  this.root = null
  this.remove = function (value) {
    if (this.root === null) {
      return null
    }
    let target
    let parent = null;
    // Find the target value and its parent
    (function findValue (node = this.root) {
      if (value === node.value) {
        target = node
      } else if (value < node.value && node.left !== null) {
        parent = node
        return findValue(node.left)
      } else if (value < node.value && node.left === null) {
        return null
      } else if (value > node.value && node.right !== null) {
        parent = node
        return findValue(node.right)
      } else {
        return null
      }
    }.bind(this)())
    if (target === null) {
      return null
    }
    // Count the children of the target to delete
    const children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0)
    // Case 1: Target has no children
    if (children === 0) {
      if (target === this.root) {
        this.root = null
      } else {
        if (parent.left === target) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    }
    // Case 2: Target has one child
    else if (children === 1) {
      const newChild = target.left !== null ? target.left : target.right
      if (parent === null) {
        target.value = newChild.value
        target.left = null
        target.right = null
      } else if (newChild.value < parent.value) {
        parent.left = newChild
      } else {
        parent.right = newChild
      }
      target = null
    }
    // Case 3: Target has two children
    // Only change code below this line
    else {
      const replacementNode = this.findMinNode(target.right)
      this.remove(replacementNode.value)
      target.value = replacementNode.value
    }
  }
  this.findMinNode = function (node = this.root) {
    if (!node) {
      return null
    } else {
      return (node.left) ? this.findMinNode(node.left) : node
    }
  }
}
