import React,{useState} from 'react'
import { API_URL } from '../../data/apipath';
const Register = ({ShowLoginHandler}) => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("")
  const [loading ,setLoading]=useState(true)

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${API_URL}/vendor/register`,{
        method:"POST",
        headers:{
          'Content-Type': "application/json"
        },
        body:JSON.stringify({username,email,password})
      })
      const data=await response.json()

      if(response.ok){
        console.log(data)
        setUsername("")
        setEmail("")
        setPassword("")
        alert("vendor registered succesfully")
        ShowLoginHandler()
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className="registerSection">
      <form action="" className='authForm' onSubmit={handlesubmit}>
              <h3>Vendor Register </h3>
              <label htmlFor="">UserName</label>
              <input type="text" placeholder='Enter your UserName'onChange={(e)=>setUsername(e.target.value)} name='username' value={username}/><br />
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Enter your email'onChange={(e)=>setEmail(e.target.value)} name='email' value={email}/><br />
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Enter your password'onChange={(e)=>setPassword(e.target.value)} name="password" value={password}/><br />
              <div className="btnSubmit">
                  <button type='submit'>Submit</button>
              </div>
       </form>
      </div>
    </>
  )
}

export default Register