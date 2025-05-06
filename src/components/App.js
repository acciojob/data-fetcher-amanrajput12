
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("")
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then(resp=>resp.json()).then(val=>setData(val.products)).catch((e)=>setError(e.message)).finally(()=>setLoading(false))
  },[])
 
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <div>
      <h1>Data Fetched from API</h1>
       
         <pre style={{maxWidth:'100vw'}} >{JSON.stringify(data,null,1 )}</pre>
         </div>
         }
    </div>
  )
}

export default App
