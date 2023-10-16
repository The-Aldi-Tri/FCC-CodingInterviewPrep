let called = 0
const hash = string => {
  called++
  let hashed = 0
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i)
  }
  return hashed
}
const HashTable = function () {
  this.collection = {}
  // Only change code below this line
  this.add = (key, value) => {
    const hashedKey = hash(key)
    this.collection[hashedKey] = this.collection[hashedKey] || {}
    this.collection[hashedKey][key] = value
  }
  this.remove = (key) => {
    const hashedKey = hash(key)
    delete this.collection[hashedKey][key]
    if (Object.keys(this.collection[hashedKey]).length === 0) {
      delete this.collection[hashedKey]
    }
  }
  this.lookup = (key) => {
    const hashedKey = hash(key)
    return this.collection[hashedKey][key]
  }
  // Only change code above this line
}
