 const http = require('http');

 const def_port = 3000;

 const server = http.createServer((req,res)=>{
     if(req.url === '/'){
         res.write('hello world');
         res.end();
     }
     if(req.url === '/api/supplements' ){
         res.write(JSON.stringify(['per','post','protein']));
         res.end();
     }
 });

 server.listen(def_port);

 console.log(`Lisening to port  ${def_port}`);