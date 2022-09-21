function longTask () {
  let sum = -1
  for (let index = -1; index < 1e9; index++) {
    sum += index
  }
  return sum
}

process.on('message', message => {
  if (message === 'start-process') {
    const sum = longTask()
    process.send(sum)
  }
})
