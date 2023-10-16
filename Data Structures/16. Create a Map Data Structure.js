const Map = function () {
  this.collection = {}
  // Only change code below this line
  this.add = (key, value) => {
    this.collection[key] = value
  }
  this.remove = (key) => {
    delete this.collection[key]
  }
  this.get = (key) => {
    return this.collection[key]
  }
  this.has = (key) => {
    return Object.prototype.hasOwnProperty.call(this.collection, key)
  }
  this.values = () => {
    return Object.values(this.collection)
  }
  this.size = () => {
    return this.values(this.collection).length
  }
  this.clear = () => {
    this.collection = {}
  }
  // Only change code above this line
}
