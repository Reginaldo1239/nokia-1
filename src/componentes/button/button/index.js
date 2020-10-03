import React from 'react';

export default function Button (props){

    let {number,letters} = props;

   const  handlerClick=(numberClick)=>{

    }
    return (
        <div class="phone-button">
                <button   onClick={()=>{props.onClick(number)}} >
                    <div>{number}</div>
                    <div>{letters}</div>
                    
                    </button>
                
         </div>
    )
}