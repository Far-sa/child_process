const { exec } = require('child_process')
const { stdout, stderr } = require('process')

exec('ls -lh&&pwd&&touch index.html', (err, stdout, stderr) => {
  if (err) return console.log('Error', err)
  if (stderr) return console.log('stdError', stderr)
  console.log('stdout', stdout)
})
