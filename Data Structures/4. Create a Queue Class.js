function Queue () {
  const collection = []
  this.print = function () {
    console.log(collection)
  }
  this.enqueue = function (data) {
    collection.push(data)
  }
  this.dequeue = function () {
    return collection.shift()
  }
  this.front = function () {
    return collection[0]
  }
  this.size = function () {
    return collection.length
  }
  this.isEmpty = function () {
    return (collection.length === 0)
  }
}
