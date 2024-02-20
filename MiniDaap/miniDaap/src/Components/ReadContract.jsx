import {useState, useEffect } from "react"
const ReadContract =({state})=>{
    const [data,setData]=useState("No data")
  console.log(state)
  useEffect(()=>{
    const {contract} = state;
   const readdata =async()=>{
    const data = await contract.methods.retrive().call()
    setData(data)
    console.log("data",data)
   }
   contract && readdata()
  },[state])
    return(
   <>
   <h1>Read Contarct:{data}</h1>
   
   </>

    )
}

export default  ReadContract