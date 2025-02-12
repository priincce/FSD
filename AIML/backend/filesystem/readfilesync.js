const fs = require('fs/promises');

const read =async()=>{
      try {
        const data =await fs.readFile("./data.txt","utf8")
         console.log(data)
      } catch (error) {
            console.log(error.message)
      }
}

read();