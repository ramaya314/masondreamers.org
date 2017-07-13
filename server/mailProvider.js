//================== SUPPORTING FUNCTIONS =========================

var mailProvider = function () {

  var module = {};

  module.sendMail = function(message, transporter, onSuccess, onError) {


    // setup e-mail data with unicode symbols
    var mail = {
      from: message.from, // sender address
      to: message.to, // list of receivers
      subject: message.subject, // Subject line
      text: message.mailBody, // plaintext body
      html: message.mailBody // html body
    };

    console.log('sending mail: ' + mail.from + ' '+ mail.to + ' '+ mail.subject + ' '+ mail.text + ' ');

    // send mail with defined transport object
    transporter.sendMail(mail, function(error, info){
      if(error){
        onError && onError();
        return console.log(error);
      }
      onSuccess && onSuccess();
      console.log('Message sent: ' + info.response);
    });
  }

  return module;
}

module.exports = mailProvider;
