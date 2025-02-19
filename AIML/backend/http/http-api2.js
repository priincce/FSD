const axios = require("axios")
const http = require("http")

const server = http.createServer(async(req, res)=>{
      res.writeHead(200, {"Content-Type":"html"});
      const apiResponse = await axios.get("https://api.github.com/users",{
            params:{
                  q:"location:ghaziabad"
            }
      });
      const userData = apiResponse.data;
      let frontData = `<html><head></head><body></body></html>`;
      userData.forEach(user => {
            frontData += `<div><img src="${user.avatar_url}"</div>`;
      });
      res.end(frontData);
});
const port = 3000
server.listen(port, ()=>{
      console.log(`server is listenning at the port ${port}`)
})