function bfs (graph, root) {
  const nodesLen = []
  for (let i = 0; i < graph.length; i++) {
    nodesLen.push(Infinity)
  }
  nodesLen[root] = 0
  const queue = [root]
  let currentNode
  while (queue.length !== 0) {
    currentNode = queue.shift()
    const edges = graph[currentNode]
    const neighborNodes = []
    for (let j = 0; j < edges.length; j++) {
      if (edges[j] === 1) {
        neighborNodes.push(j)
      }
    }
    for (let k = 0; k < neighborNodes.length; k++) {
      if (nodesLen[neighborNodes[k]] === Infinity) {
        nodesLen[neighborNodes[k]] = nodesLen[currentNode] + 1
        queue.push(neighborNodes[k])
      }
    }
  }
  return Object.assign({}, nodesLen)
};

const exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
]
console.log(bfs(exBFSGraph, 3))
console.log(bfs([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]], 1))
