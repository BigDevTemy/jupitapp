import React from 'react'

import '../../../assets/css/About/abouthero.css'
import Image from '../../../assets/images/About/mission.svg'
const Index =()=>{
    return(
        <div className="mission">
           
            <div className='imgIcon'>
               <img src={Image} className="missionImg"/>
            </div>
            <div>
               <div className='mission-title'>Borderless Freedom</div> 
               <div className='mission-main'>
               Our vision is to advance the use of borderless currency within the Africa communities. We want to make sure anyone and everyone who wants to engage in borderless payments gets prompt and clear access in their transactions.
               </div>
               <div className='mission-text'>
                   Vision
               </div>
            </div>
            
        </div>
    )
}

export default Index