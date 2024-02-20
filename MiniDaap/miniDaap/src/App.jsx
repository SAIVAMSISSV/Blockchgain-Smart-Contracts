import { useState,useEffect } from 'react'
import Web3 from 'web3'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReadContarct from './Components/ReadContract'
import WriteContarct from './Components/WriteContract'
import ABI from './ABI/ABI.json'
import './App.css'
//Step1:- Create all componets
//step2:- Connect to Blockchain
//step3:- Create instance of smartcontarct
function App() {
  const [State, setState] = useState({web3:null,contract:null})
//connecting to blockchain
  useEffect(()=>{
    const template=async()=>{
      let web3 = new  Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
      const ContractAddress ="0xA640Dd75dF656b3cEC05A2711BC0e3A85e943503";
      const ContractInstance=new web3.eth.Contract(ABI,ContractAddress);
      const accounts = await web3.eth.getAccounts();
      setState({web3:web3,contract:ContractInstance})
      // console.log(ContractInstance);
    }
    template()
  },[])
 
  return (
    <>
      <div>
      
        <ReadContarct state={State}/>
        <WriteContarct state1={State}/>
      </div>
      
    </>
  )
}

export default App
