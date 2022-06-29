var nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        // Your Username and Password required.
        user :'',
        pass : ''
    }
});

const mailOptions = {
        // from and to address required.
    from : '',
    to : '',
    subject: 'Mail From Node',
    text: 'Hello!'
};

transport.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('E-mail send : '+ info.response)
    }
});

// Note : Make sure "Less secure app access" of your google gmail account is ON. By default it is off but when you will run with "node Mailesender" 
// command in terminal, you will get a mail of unauthorized access from google. From there you can turn on less secure app access. 
// But make sure to turn it off after you test your program successfully.