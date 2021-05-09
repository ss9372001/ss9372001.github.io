const Nexmo = require('nexmo')
const nexmoConfig =require("./nexmo.json");
const path = require("path");

nexmoConfig.privateKey = path.join(__dirname, "private.key");

const nexmo = new Nexmo(nexmoConfig);

function send(otp, recipientAdresses) {
  const message = `Insert the following code: ${otp.code}`;

  nexmo.dispatch.create("failover", [
    {
      "from": { "type": "messenger", "id": "101196525485556" },
      "to": { "type": "messenger", "id": recipientAdresses.messengerId },
      "message": {
        "content": {
          "type": "text",
          "text": message
        }
      },
      "failover":{
        "expiry_time": 120,
        "condition_status": "read"
      }
    },
    {
      "from": {"type": "sms", "number": "NEXMO"},
      "to": { "type": "sms", "number": recipientAdresses.phoneNumber},
      "message": {
        "content": {
          "type": "text",
          "text": message
        }
      }
    },
    (err, data) => { 
        if(err){
          console.log(err);
        }
        console.log(data.message_uuid); }
  
  ]) 
}

module.exports = {
  send
};