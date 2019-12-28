function fibSequence(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i - 1 < 0 || i - 1 === 0) {
      arr.push(i)
    } else {
      arr.push((arr[i - 1] + arr[i - 2]))
    }
  }
  return arr.join(' ')
}

console.log(fibSequence(12))//0 1 1 2 3 5 8 13 21 34 55 89
