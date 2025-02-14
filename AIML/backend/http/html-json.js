const http = require("http")
const fs = require('fs/promises');
const { error } = require("console");



// always use JSON.parse(data) to get object from string data
// always use JSON.stringify(data) to get string from object data
const server = http.createServer(async(req,res)=>{
      // res.statusCode = 200;
      // res.setHeader('Content-Type', 'text/plain');
       //replace above code on a line
     
      
     
      // const data = users.map((user) => {
      //       return user.name;
      // });
      if(req.url === '/')
      {
            res.writeHead(200,{'Content-Type': 'application/json'});
            const jdata =await  fs.readFile("./aa.json", 'utf8');
            const user = JSON.parse(jdata);
            res.end(JSON.stringify(user))
      }
      else if(req.url === '/home')
      {
            res.writeHead(200,{'Content-Type': 'html'});
            const data = await fs.readFile("./index.html", 'utf8')
            res.end(data)
      }
      else {
            res.writeHead(200,{'Content-Type': 'html'});
            const error = await fs.readFile("./error.html", 'utf8')
            res.end(error)
      }
      
      
});



let port = 3000
server.listen(port,()=>{
      console.log(`Server is listening on port : ${port}`);
});