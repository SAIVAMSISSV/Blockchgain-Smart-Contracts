import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Web3 from 'web3'
import ReadValue from './Components/ReadValue'
import WriteValues from './Components/WriteValues'
import ABI from './ABI/ABI.json'
import './App.css'

function App() {
  const [State, setState] = useState({web3:null,contract:null})
  useEffect(()=>{
  const instance = async()=>{
    let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
    const ContractAddress ="0x9bdD1Ba24c1509AeD9274755E9c1C91d0b4baC7D";
    const ContractInstance=new web3.eth.Contract(ABI,ContractAddress);
    const accounts = await web3.eth.getAccounts();
       console.log(accounts)
       console.log(ContractInstance)
       setState({web3:web3,contract:ContractInstance})
  }
  instance()
},[])

  return (
    <>
      <ReadValue state={State}/>
      <WriteValues state1={State}/>
    </>
  )
}

export default App
