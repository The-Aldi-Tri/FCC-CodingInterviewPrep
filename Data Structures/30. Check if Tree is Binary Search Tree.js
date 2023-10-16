const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2))
function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}
function BinarySearchTree () {
  this.root = null
}
function isBinarySearchTree (tree) {
  // Only change code below this line
  function isEmptyNode (node) {
    return (node === null)
  }

  function isInOrder (node) {
    const leftInOrder = isEmptyNode(node.left) || node.left.value < node.value
    const rightInOrder = isEmptyNode(node.right) || node.right.value >= node.value
    return leftInOrder && rightInOrder
  }

  function isSubTreeOk (subTree) {
    const isLeftSubTreeOk = isBinarySubTree(subTree.left)
    const isRightSubTreeOk = isBinarySubTree(subTree.right)
    return isLeftSubTreeOk && isRightSubTreeOk
  }

  function isBinarySubTree (node) {
    return isEmptyNode(node) || (isInOrder(node) && isSubTreeOk(node))
  }

  return isBinarySubTree(tree.root)
  // Only change code above this line
}
