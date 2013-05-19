var argv = require('optimist')
  .usage('Usage: $0 [mp4]')
  .demand(['_'])
  .argv;

var child_process = require('child_process');
var sout = require('./index.js');
var options = [];
options.push('-I');
options.push('dummy');
options.push('-vvvv')
options.push(argv._[0]);
options.push('vlc://quit');
options.push("--sout-transcode-vfilter");
options.push('transform{vflip}');
options.push("--transform-type");
options.push("vflip");
options.push("--sout");
options.push(sout.stringify(require('./test/data/basic.json')))

console.log(options)
var vlc = child_process.spawn('/Applications/VLC.app/Contents/MacOS/VLC',options);

vlc.stdout.on('data', function (data) {
  console.log(data.toString('utf8'));
});

vlc.stderr.on('data', function (data) {
  console.error(data.toString('utf8'));
});

vlc.on('close', function (code) {
  console.log('vlc process exited with code ' + code);
});