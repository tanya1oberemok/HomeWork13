var nodemailer = require('nodemailer');

var transportet = nodemailer.createTransport({
    service: 'gmail.com',
    auth:{
        user: 'olyaolina86@gmail.com',
        pass: 'strifynnn'
    }
});

var mailOption = {
    from: 'olyaolina86@gmail.com',
    to: 'tanya.oberemok.45@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Ok! Some text!'
};

transportet.sendMail(mailOption, function(err, info){
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
});