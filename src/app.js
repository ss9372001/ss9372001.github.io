var http=require('http');
//create a server object:
var port=4000;
const server = http.createServer(function(req, res){

})
server.listen(port, function(error){
	if(error){
		console.log("something went wrong", error);
	} else {
		console.log("server is listening to the port", port);
	}
})