import React from 'react';
import Style from './style.module.css';
export default function  Display (props){
    let {title} = props;
    return (
    <div class={Style.display}>
        <span>{title}</span>
    </div>
    )

}