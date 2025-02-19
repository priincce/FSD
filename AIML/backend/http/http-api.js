const http = require("http");
const axios = require("axios"); // replaces http
// const fs = require("fs/promises");


const server = http.createServer(async (req, res) => {
      console.log("hi from server");
      res.writeHead(200, { "Content-Type": "html" });
      // const apiResponses =await fetch("https://dummyjson.com/products");
      // // console.log(apiResponses);

      // const data = await apiResponses.json();
      // console.log(data)

      const apiResponses = await axios.get("https://dummyjson.com/products");
      // const responseData =apiResponses.data;
      // const productsData = responseData.products;

      const productsData = apiResponses.data.products;
      console.log(productsData.length);

      let frontData = `<html><head></head><body></body></html>`;
      productsData.forEach(product => {
            frontData += `<div><img src="${product.thumbnail}"</div>`;
      });
      res.end(frontData);
});



const port = 3000;

server.listen(port, () => {
      console.log(`server listennig on port : ${port}`);
});








