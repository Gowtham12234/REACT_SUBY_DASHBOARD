import React ,{useState} from 'react'
import { API_URL } from '../../data/apipath';
const Login = ({ShowAddWelcomeHandler}) => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState('');

  const loginhandler=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${API_URL}/vendor/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      })
      const data=await response.json()
      if(response.ok){
        alert("login success");
        setEmail("")
        setPassword("")
        localStorage.setItem("login-token",data.token)
        ShowAddWelcomeHandler();
      }
    const vendorId=data.vendorId
    console.log("checking for vendorid ",vendorId);
    
    const vendorResponse=await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)
    window.location.reload()
    const vendorData=await vendorResponse.json()
    
    
    if(vendorResponse.ok){
      const vendorFirmId=vendorData.vendorFirmId;
      
      const vendorFirmName=vendorData.vendor.firm[0].firmname;
      
      localStorage.setItem("firmname",vendorFirmName)
      
      localStorage.setItem("firmId",vendorFirmId)
      
    }
    } catch (error) {
      alert("log in failed") 
    }
  }
  return (
    <>
        <div className="loginSection">
            
            <form action="" className='authForm' onSubmit={loginhandler}>
                <h3>Vendor Login </h3>
                <label htmlFor="" >Email</label>
                <input type="text" placeholder='Enter your email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter your password' name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
                <div className="btnSubmit">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login