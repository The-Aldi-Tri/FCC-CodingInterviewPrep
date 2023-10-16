function permAlone (str) {
  const permItem = getStringPermutations(str)
  const alone = []
  permItem.forEach((item) => {
    let flag = true
    for (let i = 0; i < item.length - 1; i++) {
      if (item[i] === item[i + 1]) {
        flag = false
        break
      }
    }
    if (flag) {
      alone.push(item)
    }
  })
  return alone.length
}

function getStringPermutations (str) {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          getStringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    )
}

console.log(permAlone('aab'))
