var transcode = require('../');
var assert = require('chai').assert;

suite('VLC transcode', function() {
  test('Object should stringify properly', function() {
    assert.equal(transcode.stringify(require('./data/basic.json')),"#transcode{threads=2,vcodec=h264,venc=x264{profile=main,level=31,bframes=3,keyint=150,no-cabac,min-keyint=150,scenecut=-1,crf=24,vbv-bufsize=7000,vbv-maxrate=2100,x264-ssim,no-bpyramid,x264-tune=animation},fps=30,vb=1400,scale=1,deinterlace,acodec=mpga,channels=2,samplerate=44100,ab=56}:standard{access=file,mux=mp4,dst=/Users/no/encoded1.mp4}}");
  });
});
