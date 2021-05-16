const mongoose = require('mongoose');

const connection_url = "mongodb+srv://admin:HwrmZ3BAbKuWA7MB@cluster0.ovfvd.mongodb.net/tvastradb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(usr=>{
    console.log("done") 
});

mongoose.set('useFindAndModify', false);
var db = mongoose.connection;

db.on("error",console.error.bind(console,"Try again"))

module.exports = db;
