import React, { useState } from 'react'
import Header from './Header'
import { Button, Card } from 'react-bootstrap'
import Footer from './Footer'



export default function Login() {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [emailerror,setemailerror]=useState("");
  const[passworderror,setpassworderror]=useState("");

  const handleemailerror=(e)=>{
    setemail(e.target.value)

  

  }
  const handlepassworderror=(e)=>{
    setpassword(e.target.value)

    if(e.target.value.trim().length=="")
    {
    
       setpassworderror("Password cannot be empty");
    }
    else if(e.target.value.length <8 || e.target.value.length >20)
    {
      setpassworderror("Password length must be between 8 to 20");
    }
    else{
      setpassworderror("Everything Looks Fine");
    }
    

  }
  return (
    <div>
    <Header/>
    <h3 style={{textTransform:'uppercase',textAlign:"center",marginTop:"2rem",fontFamily:"Roboto, Arial, sans-serif",fontWeight:"500"}}>Level Up Your Login</h3>
    <div className='form-container'style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Card className='mt-3 mb-5' style={{border:"none",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",width: "90%", maxWidth: "400px"}}>
            <Card.Body>
                <form className='mt-2'>
                    <input type='email'placeholder='Email' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100' value={email} onChange={handleemailerror} />
                   
                    <input type='password'placeholder='Password' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100' value={password}  onChange={handlepassworderror}/>
                    <Card.Text> 
                        {passworderror && password.trim().length === 0 ? "Password empty" : ""}
                        {passworderror && (password.length < 8 || password.length > 20) ? "Password is less than 8 or greater than 20" : ""}
                        {passworderror === 'Everything Looks Fine' ? "Everything looks good" : ""}


                    </Card.Text>

                    <a href='#Home' style={{display:"flex",justifyContent:"start",color:"inherit"}} className='mt-2'>Return To Store</a>
                    
                    <Button className='w-100 mt-4 p-3 bg-black text-white border-0 rounded-0' style={{textTransform:"uppercase"}}>Login</Button>
                    <p className= "mt-3" style={{display:"flex",justifyContent:"center"}}>or</p>
                    <a href="#Signup" style={{display:"flex",justifyContent:"center",color:"inherit"}}>Create an account</a>
                    
                 </form>
            </Card.Body>
        </Card>
    </div>
    <Footer/>
</div>
  )
}
