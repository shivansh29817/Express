var fs=require('fs');
fs.appendFile('myappendfile1.txt',
'hello content', function(err){
    if(err) throw err;
    console.log('saved');
});