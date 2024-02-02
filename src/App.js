import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  let[val,setval]=useState()
  let[val1,setval1]=useState()
  let[val3,setval3]=useState()
  const sum=()=>{
    setval3(parseInt(val)+parseInt(val1))
  }
  const sub=()=>{
    setval3(parseInt(val)-parseInt(val1))
  }
  const mul=()=>{
    setval3(parseInt(val)*parseInt(val1))
  }
  const div=()=>{
    setval3(parseInt(val)/parseInt(val1))
  }
  return (
   <>
    val1:<input type='text' onChange={(e)=>{setval(e.target.value)}}></input>
    val2:<input type='text' onChange={(e)=>{setval1(e.target.value)}}></input>
    ans:<input type='text' value={val3}></input>
    <input type='button' value={"sum"} onClick={sum}></input>
    <input type='button' value={"sub"} onClick={sub}></input>
    <input type='button' value={"mul"} onClick={mul}></input>
    <input type='button' value={"div"} onClick={div}></input>
   </>
  );
}
export default App;
