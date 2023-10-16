function updateInventory (arr1, arr2) {
  let inv = arr1.map((item) => item[1])
  arr2.forEach((item) => {
    if (inv.includes(item[1])) {
      const idx = inv.indexOf(item[1])
      arr1[idx][0] += item[0]
    } else {
      for (let i = 0; i <= inv.length; i++) {
        if (item[1].localeCompare(inv[i]) <= 0) {
          arr1 = [...arr1.slice(0, i), item, ...arr1.slice(i)]
          inv = [...inv.slice(0, i), item[1], ...inv.slice(i)]
          break
        }
      }
    }
  })
  return arr1
}

// Example inventory lists
const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
]

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
]

console.log(updateInventory(curInv, newInv))
