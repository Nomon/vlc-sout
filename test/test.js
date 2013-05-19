var transcode = require('../');
var assert = require('chai').assert;

suite('VLC transcode', function() {
  test('Object should stringify properly', function() {
    assert.equal(transcode.stringify(require('./data/basic.json')),"#transcode{vcodec=h264,venc=x264{profile=main,level=31,keyint=150,idrint=150},fps=30,vb=1400,scale=1,deinterlace,acodec=mpga,audio-sync,channels=2,samplerate=44100,ab=56}:standard{access=file,mux=mp4,dst=/tmp/encoded.mp4}}");
  });
});
