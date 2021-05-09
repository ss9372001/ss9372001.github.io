const Nexmo = require('nexmo')
const nexmoConfig =require("./nexmo.json");
const path = require("path");

nexmoConfig.privateKey = path.join(__dirname, "private.key");

const nexmo = new Nexmo(nexmoConfig);


function send(otp, recipientAdresses) {
  console.log(recipientAdresses.phone);
  const message = `Insert the following code: ${otp.code}`;
  nexmo.channel.send(
    { "type": "sms", "number": '91'+recipientAdresses.phone },
    { "type": "sms", "number": "NEXMO" },
    {
      "content": {
        "type": "text",
        "text": message
      }
    },
    (err, data) => { 
      if(err){
        console.log(err);
      }
      console.log(data.message_uuid); }
  );
}

module.exports = {
  send
};
