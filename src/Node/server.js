var http = require("http")
var fs = require("fs")
var typeMapping = {
	"html":"text/html",
	"js":"text/javascript",
	"css":"text/css",
	"ico":"image/x-icon"
};
var getResourceExtension = function (req) {
	var url =req.url;
	var lastIndexOfDot = url.lastIndexOf(".");
	if(lastIndexOfDot === -1) return "text/plain";
	return url.substring(lastIndexOfDot+1);
};
var responseToClient = function (req, res) {
	fs.createReadStream(req.url.replace(/^\//,"")).pipe(res)
};
var server = http.createServer(function (req,res) {
	console.log(req)
	// console.log("request url:",req.url);
	var extension = getResourceExtension(req);
	res.writeHead(200,{"Contype-type":typeMapping[extension]})
	var delayRun = function (time) {
		setTimeout(function () {
			responseToClient(req,res)
		},time||0);
	};
	if(extension === "html" || extension === "css"){
		delayRun(0);
	}else if(extension === "js"){
		delayRun(15000);
	}else{
		res.end("");
	}
});
server.listen(3000);
console.log("listening at port 3000");
