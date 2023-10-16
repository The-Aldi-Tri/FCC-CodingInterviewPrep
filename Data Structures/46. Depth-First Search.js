function dfs (graph, root) {
  const stack = [root]
  const visited = []
  let currentNode
  while (stack.length > 0) {
    currentNode = stack.pop()
    if (!visited.includes(currentNode)) {
      visited.push(currentNode)
      const edges = graph[currentNode]
      for (let i = 0; i < edges.length; i++) {
        if (edges[i] === 1) {
          stack.push(i)
        }
      }
    }
  }
  return visited
}

const exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
]
console.log(dfs(exDFSGraph, 3))
console.log(dfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1))
