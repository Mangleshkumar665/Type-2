import React, { useState } from 'react'

const OptionsBar = () => {  

    const [time, setTime] = useState(15);


    const timeSelection = ()=>{

    } 
    return (
        <>
            <div className='option-bar-head'>
                <section className='options-bar ' >
                    <ul className=' d-flex option-btns-wrapper  ' style={{ margin: "0px", padding: "0px" }} >
                        <div className=' option-bar-caption '> Time : </div>
                        
                        <li className=' mx-1 option-btn  '  >
                            <input type="button" value="15 S" className=' btn  ' onClick={()=>setTime(15)} />
                        </li>

                        <li className=' mx-1 option-btn ' >
                            <input type="button" value="30 S" className=' btn  ' onClick={()=>setTime(30)}/>
                        </li>

                        <li className=' mx-1 option-btn ' >
                            <input type="button" value="45 S" className=' btn  ' onClick={()=>setTime(45)} />
                        </li>

                        <li className=' mx-1 option-btn ' >
                        <input type="button" value="60 S" className=' btn'onClick={()=>setTime(60)} /> 
                        </li>
                        {console.log(time)}
                    </ul>



                </section>

            </div>
        </>
    )
}

export default OptionsBar
