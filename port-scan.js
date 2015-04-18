/**
 * scans your own ports to see which are firewalled
 */


var http = require('http');

function test(port, url){
	
	var server=http.createServer(function (req, res) {
		  res.writeHead(200, {'Content-Type': 'text/plain'});
		  res.end('Hello World\n');
	});
	
	//listen on port. 
	server.listen(i);

	//request hello world page from url (not local address!)
	http.get("http://"+url+':'+port, function(res) {
		
		
		var body=''
		res.on('data', function(chunk){
			 body += chunk;
		});
		res.on('end',function(){
			if(body==='Hello World\n'){
				console.log('open port: '+port);
			}else{
				console.log('closed: '+port);
			}
			server.close();
		});
		
	
	}).on('error', function(e) {
		console.log('closed: '+port);
		server.close();
	});
	
	//done
	
	
	
}

var s=8070;
var e=8090;//65535

if(process.argv.length==3){
	for(var i=s;i<e;i++){
		test(i, process.argv[2]);
	}
}else{
	console.log('needs domain name arg: '+JSON.stringify(process.argv));
}




