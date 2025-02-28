import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
      res.send(`hi`);
})

// access using params(parameters)
app.get("/api/:name/:rollno", (req, res)=>{
      try {
            const {name, rollno} = req.params;
            if(!name)
                  {
                        res.status(400).send("Name required")
                  }
            else{
                  res.send(`name:${name}, roll:${rollno}`);
            }
      } catch (error) {
            console.log(`Error : ${error.message}`);
      }
});

app.listen(port, ()=>{
      console.log(`hello from server: ${port}`);
})