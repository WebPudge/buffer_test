var fs = require('fs');
var iconv = require('iconv-lite')
var chunks = [];
var size = 0;
var rs = fs.createReadStream('test.md', {highWaterMark: 11});

rs.on('data', function(chunk){
  chunks.push(chunk);
  size += chunk.length;
  console.log(chunk)
});

rs.on('end', function(){
  var buf = Buffer.concat(chunks,size);
  console.log('buffer:',buf.toString())
  var str = iconv.decode(buf,'utf8');
  console.log(str)
})
