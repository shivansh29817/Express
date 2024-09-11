var http=require('http');
var fs=require('fs');
var url=require('url');
var nodemailer=require('nodemailer');


var transporter = 
nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '30684csiot@gmail.com',
        pass: 'rustyjod@46'
    }
});

var mailOptions={
    from: '30684csiot@gmail.com',
    to: 'shivansh29817@gmail.com',
    subject: 'Test Email - sent using Node',
    text: 'Nodejs Rocks'
};

transporter.sendMail(mailOptions,
 function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email Sent: '+info.response);
    }
 });