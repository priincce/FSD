import express from "express";

const app = express();
app.use(express.json());

const users = [
      {
            id:1,
            name:'dev',
            email:'dev@gmail.com'
      }
]

app.get("/",(req,res)=>{
      res.send("hello !")
})


//get all users details
app.get("/api/v1/users",(req,res)=>{
      res.send(users)
})

//create new user 
app.post("/api/v1/users",(req,res)=>{
      const {name, email} = req.body;

      const userid = users.length > 0 ? users[users.length -1].id+1 : 1;

      users.push({id:userid, name, email});

      // users.push(data);
      res.status(200).send("user has been created");
})

// get user by user id
app.get("/api/v1/users/:id",(req,res)=>{
      const {id} = req.params;
      const user = users.find((user)=>user.id === parseInt(id));
      if(user === undefined)
      {
            res.status(404).send("Such user doesn't exist");
      }
      else{
            res.status(200).send(user);
      }
})

//update the user by using id(index)
app.patch("/api/v1/users/:id", (req,res)=>{
      const {id}= req.params;
      const {name}= req.body;
      const index = users.findIndex(user=>user.id == id);
      users[index].name = name;
      res.status(200).send("User updated successfully");
})

//update the user by using id(index)
app.delete("/api/v1/users/:id", (req,res)=>{
      const {id}= req.params;
      const index = users.findIndex(user=>user.id == id);
      users.splice(index, 1);
      res.status(200).send("User Deleted successfully");
})



const port = 3000
app.listen(port, ()=>{
      console.log(`server is listening on port :${port}`)
})