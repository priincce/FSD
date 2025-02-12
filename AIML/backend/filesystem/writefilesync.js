const fs = require('fs/promises');

const write =async()=>{
      try {
            const data =await fs.readFile("./data.txt","utf8")
      await fs.writeFile("./write.txt", data)
      
      console.log(data)
      } catch (error) {
            console.log(error.message)
      }
}

write();