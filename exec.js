#!/usr/bin/node
const { exec } = require('child_process')

exec('pwd', (err, stdout, stderr) => {
  if (err) return console.log('Error', err)
  if (stderr) return console.log('stdError', stderr)
  console.log('stdout', stdout)
})
