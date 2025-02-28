import express from "express";
import fs from "fs/promises";

const app = express();
const port = 3000

const jdata =await  fs.readFile("./aa.json", 'utf8');
const data = JSON.parse(jdata)

app.get('/', (req, res)=> {
      res.send("Welcome Boi!!!");
});

app.get('/api', (req, res)=> {
      
      try {
            const {name,rollno} = req.query;
            console.log( {name,rollno})
            if(!name){
                  return res.status(400).send("name is required");
            }
            else{
                  res.send(`Welcome ABES => name: ${name} and roll no : ${rollno}`);
            }
      } catch (error) {
            console.log(`Error : ${error.message}`);
      }
      
});

// http://localhost:3000/api/mohit/110
app.get("/api/:name/:rollno", (req, res) =>{
      try {
            const {name,rollno} = req.params;
            console.log({name, rollno})
            res.send(`Welcome ${name} roll : ${rollno}`)
      } catch (error) {
            console.log(`Error : ${error.message}`);
      }
});


















app.listen(port, ()=>{
      console.log(`server is listening on port : ${port}`);
});

