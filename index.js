const { default: Axios } = require("axios");
function getHoneyedWords() {
    var url = "https://chp.shadiao.app/api.php";
    //获取这个接口的信息
    var pph= Axios.get(url);
    return pph;
}

const nodemailer = require("nodemailer");
// 发送邮件函数
async function sendMail(text) {
    var user = "Younger.Xu@outlook.com";//自己的邮箱
    var pass = "qwerty369."; //qq邮箱授权码,如何获取授权码下面有讲
    var to = "1247994335@qq.com";//对方的邮箱
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
            ciphers: 'SSLv3'
        }, auth: {
            user: user,
            pass: pass
        },
    });
    let info = await transporter.sendMail({
        from: `亲爱的老公<${user}>`, // sender address
        to: `亲爱的老婆<${to}>`, // list of receivers
        subject: "亲爱的老婆", // Subject line
        text: text, // plain text body
    });
    console.log("发送成功");
}


getHoneyedWords().then(res=>{
    console.log(res.data)
  //发送邮件
    sendMail(res.data);
})

//测试一下
//sendMail('你好老婆')
