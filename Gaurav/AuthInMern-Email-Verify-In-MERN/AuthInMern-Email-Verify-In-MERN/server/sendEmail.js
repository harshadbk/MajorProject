const nodemailer = require("nodemailer");

module.exports = async (email,subject,text) =>{
  try{
    const transpoter = nodemailer.createTransporter({
      host:process.env.HOST,
      services:process.env.SERVICES,
      port:Number(process.env.EMAIL_PORT),
      secure:Boolean(process.env.SECURE),
      auth:{
        user:process.env.USER,
        pass:process.env.PASS,
      }
    });
await transpoter.sendMail({
  from:process.env.USER,
  to:email,
  subject:subject,
  text:text,
 });
 console.log("Email sent Sucessfully");
}
  catch(error){
    console.log("Email  not sent");
    console.log(error);
  }
}

 