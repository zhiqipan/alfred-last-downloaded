const alfy = require('alfy');
const { exec } = require('child_process');

const run = async () => {
  exec('cd ~/Downloads && ls -ltcr1 | tail -5', ((error, stdout, stderr) => {
    if (!!stdout) {
      const list = stdout.split('\n').filter(Boolean).map(file => file.trim()).map(file => ({
        title: file,
        subtitle: 'Open file',
        arg: '~/Downloads/' + file,
      })).reverse();
      alfy.output(list);
    }
  }));
}

run();
