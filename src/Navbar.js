import React, { useState } from 'react'

export default function Navbar() {

const[display , setDisplay]= useState('block');

function opennav()
{
    if(display === 'block'){
        setDisplay('none');
        
    }
    else{
        setDisplay('block');
        
    }
}

    return (
        <div>
            <button onClick={opennav}><i className="fas fa-angle-double-down"></i></button>
            <div className='maindiv' style={{display:display}}>
                
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            
        </div>
    )
}
{/* <i class="fas fa-angle-double-down"></i> */}