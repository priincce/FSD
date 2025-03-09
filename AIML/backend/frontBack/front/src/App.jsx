import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async() =>{
      const apidata = await axios.get("http://localhost:3000/api/v1");
      setProducts(apidata.data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <h1>fumc. you guyyz..</h1>
      {/* {JSON.stringify(products)} */}
      {products.map((product)=>{
        return (
         <div>
           <h2>{product.title}</h2>
           <img src={product.thumbnail} alt="" />
         </div>
        )
      })}
      </div>
  )
}

export default App
