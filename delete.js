var fs=require('fs');
var rs = fs.createReadStream('./myappendfile1.txt');
rs.on('open',function(){
    console.log('This File is open');
});