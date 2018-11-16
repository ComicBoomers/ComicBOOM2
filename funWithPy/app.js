let { PythonShell } = require('python-shell');

let inputPath = './test.mov';
let outputPath = './test.gif';

let options = {
  mode: 'text',
  pythonPath: '/usr/local/bin/python',
  pythonOptions: ['-u'],
  // make sure you use an absolute path for scriptPath
  scriptPath: '/Users/hystee/GH/funWithPy/',
  args: [],
};

PythonShell.run('creategifs.py', options, function(err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
