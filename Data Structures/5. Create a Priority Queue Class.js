function PriorityQueue () {
  this.collection = []
  this.printCollection = function () {
    console.log(this.collection)
  }
  this.enqueue = function (data) {
    if (this.size() === 0) {
      this.collection.push(data)
    } else {
      let index = 0
      this.collection.forEach(item => {
        if (item[1] <= data[1]) {
          index++
        }
      })
      this.collection.splice(index, 0, data)
    }
  }
  this.dequeue = function () {
    return this.collection.shift()[0]
  }
  this.size = function () {
    return this.collection.length
  }
  this.isEmpty = function () {
    return this.size() === 0
  }
  this.front = function () {
    return this.collection[0][0]
  }
}
