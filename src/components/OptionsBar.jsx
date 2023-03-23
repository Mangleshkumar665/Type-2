import {select} from '../store/timerSlice' // calling the action select which will call the reducer that will chnage the state . 

import {useDispatch,useSelector} from 'react-redux'

const OptionsBar = () => {  

    const dispatch = useDispatch();

    const handleSelect = (time) =>{
        dispatch(select(time))
    }





    return (
        <>
            <div className='option-bar-head'>
                <section className='options-bar ' >
                    <ul className=' d-flex option-btns-wrapper  ' style={{ margin: "0px", padding: "0px" }} >
                        <div className=' option-bar-caption '> Time : </div>
                        
                        <li className=' mx-1 option-btn  '  >
                            <input type="button" value="15 S"   onClick={()=>handleSelect(15)} />
                        </li>

                        <li className=' mx-1 option-btn ' >
                            <input type="button" value="30 S"  onClick={()=>handleSelect(30)}  />
                        </li>

                        <li className=' mx-1 option-btn ' >
                            <input type="button" value="45 S" onClick={()=>handleSelect(45)} />
                        </li>

                        <li className=' mx-1 option-btn ' >
                        <input type="button" value="60 S"  onClick={()=>handleSelect(60)} /> 
                        </li>
                     
                    </ul>



                </section>

            </div>
        </>
    )
}

export default OptionsBar
