
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://dummyjson.com/products").then(resp=>resp.json()).then(val=>setData(val.products))
  },[])
  console.log(data)
  if(data.length<1){
    return <div>Loading....</div>
  }
  return (
    <div>
      <h1>Data Fetched from API</h1>
        {/* Do not remove the main div */}
         <pre style={{maxWidth:'100vw'}} >{JSON.stringify(data,null,1 )}</pre>
    </div>
  )
}

export default App
