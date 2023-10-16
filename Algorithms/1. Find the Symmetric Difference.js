function sym (...args) {
  let n = args.length
  if (n < 2) return 'Need minimum 2 array'
  while (n >= 2) {
    if (n === 2) {
      const [a, b] = [...args]
      const sym = getSym(a, b)
      return sym
    } else {
      const [a, b, ...rest] = [...args]
      const sym = getSym(a, b)
      if (sym.length !== 0) rest.unshift(sym)
      args = [...rest]
      n = args.length
    }
  }
}

function getSym (a, b) {
  const sym = []
  a.forEach((item) => {
    if (!sym.includes(item) && !b.includes(item)) {
      sym.push(item)
    }
  })
  b.forEach((item) => {
    if (!sym.includes(item) && !a.includes(item)) {
      sym.push(item)
    }
  })
  return sym.sort()
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
