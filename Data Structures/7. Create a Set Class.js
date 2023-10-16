class Set {
  constructor () {
    // Dictionary will hold the items of our set
    this.dictionary = {}
    this.length = 0
  }

  // This method will check for the presence of an element and return true or false
  has (element) {
    return this.dictionary[element] !== undefined
  }

  // This method will return all the values in the set
  values () {
    return Object.values(this.dictionary)
  }

  // Only change code below this line
  add (value) {
    if (this.has(value)) {
      return false
    } else {
      this.dictionary[value] = value
      this.length += 1
      return true
    }
  }

  remove (value) {
    if (this.has(value)) {
      delete this.dictionary[value]
      this.length -= 1
      return true
    } else {
      return false
    }
  }

  size () {
    return this.length
  }
  // Only change code above this line
}
