var http=require('http');
var fs=require('fs');
var url=require('url');
var rs=fs.createReadStream('./myappendfile1.txt');
rs.on('open',function(){
    console.log("The File is open");


});
rs.on('end',function(){
    console.log("The File is open");
});