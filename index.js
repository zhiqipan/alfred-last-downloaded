const alfy = require('alfy');
const { exec } = require('child_process');

const run = async () => {
  exec('cd ~/Downloads && ls -ltcr1 | tail -1', ((error, stdout, stderr) => {
    if (!!stdout) {
      const result = stdout.trim();
      alfy.output([{
        title: result,
        subtitle: '~/Downloads/' + result,
        arg: '~/Downloads/' + result,
      }])
    }
  }));
}

run()
