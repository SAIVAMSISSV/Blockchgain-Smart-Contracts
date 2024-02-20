import {useState, useEffect } from "react"
const WriteContract =({state1})=>{
    const {contract,web3} = state1

    const [write,setwrite] = useState("Not Updated")

  
    // console.log("writecontract",state1)

    // useEffect(()=>{
    //     const {contract} = state1
    //     const writedata =async()=>{
    //         yourAddress ="0xCe6dEA9D7b61cB2d8D7D5AE0DF78244dBf2E7D54";
    //         const tx = await contract.methods.setNumber(123).send({ from: yourAddress });
    //         console.log("data write",tx)
        
    //     }
    // },[])
    const writedata=async(e)=>{
           e.preventDefault()
           const data = document.querySelector("#data").value;
           console.log(data)
           setwrite(data)
           const accounts =await web3.eth.getAccounts();
           await contract.methods.setNumber(data).send({ from: accounts[2]});
    }
    return(
   <>
   <form onSubmit={writedata}>
    <input id="data" className="input"></input>
    <button className="btn">Submit</button>
    <h1>Write value is:{write}</h1>
   </form>
   </>

    )
}

export default  WriteContract