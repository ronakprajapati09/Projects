//to,from,subject,text
const mailer = require('nodemailer');

///function

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"ronaknodejs@gmail.com",
            pass:"lxtk qvdv ojxv krra"
        }
    })

    const mailOptions = {
        from: 'ronaknodejs@gmail.com',
        to: to,
        subject: subject,
        text: text
        //html:"<h1>"+text+"</h1>"
    }
    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse);
    return mailresponse;

}

module.exports ={
    sendingMail
}


// sendingMail("ronakprajapati2809@gmail.com","Test Mail","this is test mail")