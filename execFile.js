const { execFile } = require('child_process')
const { exec } = require('child_process')

exec('chmod +x exec.js', (err, stdout, stderr) => {
  if (err) return console.log('Error', err)
  if (stderr) return console.log('stdError', stderr)
  console.log('stdout', stdout)
})

execFile('./exec.js', (err, stdout, stderr) => {
  if (err) return console.log('Error', err.message)
  if (stderr) return console.log('stderr', err.message)
  console.log('stdout', stdout)
})
