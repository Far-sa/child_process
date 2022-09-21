const { exec } = require('child_process')
const { stdout, stderr } = require('process')

exec('cd exec&&touch index.txt', (err, stdout, stderr) => {
  if (err) return console.log('Error', err)
  if (stderr) return console.log('stdError', stderr)
  console.log('stdout', stdout)
})
