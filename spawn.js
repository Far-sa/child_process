const { spawn } = require('child_process')

const child = spawn('ls', ['-lh'])

child.stdout.on('data', data => {
  console.log('stdout :', data.toString())
})

child.stderr.on('error', error => {
  console.log('stderr', error.toString())
})

child.on('exit', (code, signal) => {
  console.log('process exit with code :', code)
  console.log('process has been killed with :', signal)
})
