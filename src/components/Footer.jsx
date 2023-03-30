import React from 'react'

const Footer = () => {
    return (
  
        <footer>
      
        <div className=" d-flex align-items-center justify-content-center " style={{height : "100px",marginTop : "2rem",backgroundColor:"grey",fontSize:"20px"}} >
        Developed by Manglesh Kumar 
        <button className='social-icons' onClick={()=> window.open('https://www.instagram.com/ghostmak_rov/')} style={{all:"unset"}}>
        <i className="fa-brands fa-instagram m-2 fa-2xl  "></i></button>
        <button className='social-icons' onClick={()=> window.open('https://github.com/Mangleshkumar665')}  style={{all:"unset"}}>
        <i class="fa-brands fa-github fa-2xl m-2 "></i>
        </button>
        <button className=' social-icons' style={{all:"unset"}} onClick={()=> window.open('https://www.linkedin.com/in/manglesh-kumar-217828256')}>
        <i class="fa-brands fa-linkedin fa-2xl m-2 "></i>
        </button>
        </div>
        
    </footer>
  )
}

export default Footer
