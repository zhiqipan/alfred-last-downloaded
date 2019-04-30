const path = require('path');
const alfy = require('alfy');
const runApplescript = require('run-applescript');

const run = async () => {
  const result = await runApplescript﻿(`
    on run
      tell application "Finder"
        set latestFile to last item of (sort (get files of (path to downloads folder)) by creation date) as alias
        set fileName to latestFile's name
      end tell
      return fileName
      # return POSIX path of latestFile
    end run
  `);
  alfy.output([{
    title: result,
    subtitle: '~/Downloads/'+result,
    arg: '~/Downloads/'+result,
  }])
}

run()
