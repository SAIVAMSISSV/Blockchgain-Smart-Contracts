import { useState } from "react"
const writevalues=({state1})=>{

    const {contract,web3} = state1

    const[store,setstore]=useState("No data")

    const insert=async(e)=>{
        e.preventDefault()
        const firstvalue = document.querySelector('#FirstV').value;
        const secondvalue = document.querySelector('#secondV').value;
        console.log(firstvalue,secondvalue)
        const accounts =await web3.eth.getAccounts();
        const sum=await contract.methods.addition(firstvalue,secondvalue).send({from:accounts[3]});
       console.log(sum)
       setstore(sum)


    }
    return(

        <>
       <form onSubmit={insert}>
        <table>
            <tr>
                Enter first value
                <td>
                <input id="FirstV"></input>
               </td>
            </tr>
            <tr>
                Enter second value
                <td>
                <input id="secondV"></input>
               </td>
            </tr>

            
            
           
            
         </table>
         <table>
            <h1>Sum is : {store}</h1>
         </table>
        
        <button>addition</button>
       </form>
        </>
    )
}

export default writevalues