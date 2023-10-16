function Stack () {
  let collection = []
  this.print = function () {
    console.log(collection)
  }
  this.push = function (data) {
    collection.push(data)
    return collection
  }
  this.pop = function () {
    return collection.pop()
  }
  this.peek = function () {
    const idx = collection.length - 1
    return collection[idx]
  }
  this.isEmpty = function () {
    return (collection.length === 0)
  }
  this.clear = function () {
    collection = []
  }
}
