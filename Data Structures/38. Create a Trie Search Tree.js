const displayTree = tree => console.log(JSON.stringify(tree, null, 2))
const Node = function () {
  this.keys = new Map()
  this.end = false
  this.setEnd = function () {
    this.end = true
  }
  this.isEnd = function () {
    return this.end
  }
}
const Trie = function () {
  // Only change code below this line
  this.root = new Node()

  this.add = function (word) {
    const n = word.length
    let currentNode = this.root
    let i = 0
    while (i < n) {
      if (Object.keys(currentNode.keys).includes(word[i])) {
        currentNode = currentNode.keys[word[i]]
      } else {
        const newNode = new Node()
        currentNode.keys[word[i]] = newNode
        currentNode = newNode
        if (i === n - 1) {
          currentNode.setEnd()
        }
      }
      i += 1
    }
  }
  this.isWord = function (word) {
    const n = word.length
    let currentNode = this.root
    let i = 0
    while (i < n) {
      if (Object.keys(currentNode.keys).includes(word[i])) {
        currentNode = currentNode.keys[word[i]]
        if (i === n - 1) {
          if (currentNode.isEnd()) {
            return true
          } else {
            return false
          }
        }
      } else {
        return false
      }
      i += 1
    }
  }
  this.print = function () {
    const words = []
    function reTRIEve (node, subWord) {
      if (Object.keys(node.keys).length !== 0) {
        for (const letter of Object.keys(node.keys)) {
          reTRIEve(node.keys[letter], subWord.concat(letter))
        }
        if (node.isEnd()) {
          words.push(subWord)
        }
      } else {
        subWord.length > 0 ? words.push(subWord) : undefined
      }
    }
    reTRIEve(this.root, '')
    return words
  }
  // Only change code above this line
}

const trie = new Trie()
trie.add('word')
trie.add('words')
console.log(trie)
