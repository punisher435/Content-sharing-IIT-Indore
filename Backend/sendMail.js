const nodemailer = require("nodemailer"); 
var result = null;
var Transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "rentitsequrity@gmail.com",
        pass: "xkjmmulgzoawbedm"
    }
});
let sender = "rentitsequrity@gmail.com";
const sendMail = (email,password,userId,type) =>{
    var mailOptions;
    mailOptions = {
        from: sender,
        to: email,
        subject: "Email Confirmation",
        html: `<p>Click <form action="http://localhost:3010/${type=='new'?'verify':'update'}/${userId}" id="form" method="post"><input id="u" type='hidden' name="emailId" value="${email}"></input><input type='hidden' id="p" name="password" value="${password}"></input><a><input style="border-width:0px;color:blue;background-color:transparent;" type="submit" value='here'></a></form> to verify your email.</p>`,
        text:`<p>Click <form action="http://localhost:3010/${type=='new'?'verify':'update'}/${userId}" id="form" method="post"><input id="u" type='hidden' name="emailId" value="${email}"></input><input type='hidden' id="p" name="password" value="${password}"></input><a><input type="submit" name="Submit" value="here"/></a></form> to verify your email.</p>`
    };

     return new Promise((res,rej)=>{
        Transport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                rej(0);
    
            } else {
                console.log("Message sent");
                res(1);
            }
        })
     })


};

module.exports = sendMail;