import { useState } from 'react';
import {select} from '../store/timerSlice' // calling the action select which will call the reducer that will chnage the state . 

import {useDispatch} from 'react-redux'


const OptionsBar = () => {  

    const [selectedBtn, setSelectedBtn] = useState(15)
    const dispatch = useDispatch();

    const handleSelect = (time) =>{
        setSelectedBtn(time)
        dispatch(select(time))
    }



    return (
        <>
            <div className='option-bar-head  '>
                <section className='options-bar ' >
                    <ul className=' d-flex option-btns-wrapper  ' style={{ margin: "0px", padding: "0px" }} >
                        <div className=' option-bar-caption '> Time : </div>
                        
                        <li className={selectedBtn === 15 ? "mx-1 option-btn btn-selected" : "mx-1 option-btn " }  >
                            <input type="button" value="15 S"  className='btn'  onClick={()=>handleSelect(15)} />
                        </li>

                        <li className={selectedBtn === 30 ? "mx-1 option-btn btn-selected" : "mx-1 option-btn " }  >

                            <input type="button" value="30 S" className="btn" onClick={()=>handleSelect(30)}  />
                        </li>

                        <li className={selectedBtn === 45 ? "mx-1 option-btn btn-selected" : "mx-1 option-btn " }  >
                            <input type="button" value="45 S" className="btn" onClick={()=>handleSelect(45)} />
                        </li>

                        <li className={selectedBtn === 60 ? "mx-1 option-btn btn-selected" : "mx-1 option-btn " }  >
                        <input type="button" value="60 S" className="btn" onClick={()=>handleSelect(60)} /> 
                        </li>
                     
                    </ul>



                </section>

            </div>
        </>
    )
}

export default OptionsBar
