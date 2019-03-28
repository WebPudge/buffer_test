var fs = require('fs');
var data = '';
var rs = fs.createReadStream('test.md', {highWaterMark: 11});
// 设置decoder对象进行Buffer解码
rs.setEncoding('utf8');

rs.on('data', function(chunk){
  data += chunk;
  console.log(chunk)
});

rs.on('end', function(){
  console.log(data)
})

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
var buf1 = Buffer.from([0xe5,0xba,0x8a,0xe5,0x89,0x8d,0xe6,0x98,0x8e,0xe6,0x9c]);
console.log('decoder buf1:',decoder.write(buf1));

var buf2 = Buffer.from([0x88,0xe5,0x85,0x89,0xef,0xbc,0x8c,0xe7,0x96,0x91,0xe6]);
console.log('decoder buf2:',decoder.write(buf2));