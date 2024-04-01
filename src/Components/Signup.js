import React from 'react'
import Header from  './Header';
import { Button, Card } from 'react-bootstrap';
import Footer from './Footer';


export default function Signup() {
  return (
    <div>
        <Header/>
        <h3 style={{textTransform:'uppercase',textAlign:"center",marginTop:"2rem",fontFamily:"Roboto, Arial, sans-serif",fontWeight:"500"}}>Create an account</h3>
        <div className='form-container'style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Card className='mt-3 mb-5' style={{border:"none",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",width: "90%", maxWidth: "400px"}}>
                <Card.Body>
                    <form className='mt-2'>
                        <input type='text'placeholder='First Name' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100'/>
                        <input type='text'placeholder='Last Name' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100'/>
                        <input type='text'placeholder='Email' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100'/>
                        <input type='text'placeholder='Password' style={{border:"none",outline:"none",backgroundColor:"#F0F0F0",borderRadius:"0.4rem"}} className='p-3 mt-2 w-100'/>

                        <Button className='w-100 mt-4 p-3 bg-black text-white border-0 rounded-0' style={{textTransform:"uppercase"}}>Create</Button>
                        <a href='#Home' style={{display:"flex",justifyContent:"center",color:"inherit",textDecoration:"none"}} className='mt-2'>Return To Store</a>
                     </form>
                </Card.Body>
            </Card>
        </div>
        <Footer/>
    </div>
  )
}
