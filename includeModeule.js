var http=require('http');//predefined module
var dt=require('./myFirstModule');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time is:<b>"+dt.myDateTime()+"</b>");
    res.end();
}).listen(5001);
console.log('server started on port:5001');