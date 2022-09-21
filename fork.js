const express = require('express')
const { fork } = require('child_process')

const app = express()

app.get('/', (req, res) => {
  const child = fork('longTask.js')
  child.send('start-process')
  child.on('message', sum => {
    res.send(sum.toString())
  })
})

app.listen(3300, () => {
  console.log('Ready on: http://localhost:3300')
})
