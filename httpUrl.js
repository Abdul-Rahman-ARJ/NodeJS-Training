var http=require('http');
var url=require('url');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello </br>');
    var q=url.parse(req.url).query;
    console.log(q);
    var txt='year:<b>'+q.year+"</b> month:<b>"+q.month+"</b>";
    res.write(txt);
    res.end();
}).listen(3000);
