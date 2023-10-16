const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this.root = null
  // Only change code below this line
  this.breadthFirstSearch = function (direction) {
    const queue = [this.root]
    const results = []

    while (queue.length > 0) {
      const node = queue.shift()
      results.push(node.value)

      if (direction === 'levelOrder') {
        if (node.left) {
          queue.push(node.left)
        }
        if (node.right) {
          queue.push(node.right)
        }
      }

      if (direction === 'reverseLevelOrder') {
        if (node.right) {
          queue.push(node.right)
        }
        if (node.left) {
          queue.push(node.left)
        }
      }
    }

    return results
  }
  this.levelOrder = function () {
    if (!this.root) return null
    return this.breadthFirstSearch('levelOrder')
  }
  this.reverseLevelOrder = function () {
    if (!this.root) return null
    return this.breadthFirstSearch('reverseLevelOrder')
  }
  // Only change code above this line
}
