import React from 'react'

export default function Mainmenu() {
    return (
        <div>
         <nav className="menu-bar">
          <ul style = {{display: "inline-block"}}>
            <li  >
             <img style= {{height : "28px", width : "28px"}}  className="apple" src="https://firebasestorage.googleapis.com/v0/b/trabajoreact-f23c5.appspot.com/o/logos%2Flogo%20apple1.png?alt=media&token=e0ef1d5a-0a97-4445-8d9b-29316ea1b116" />
               
            </li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Music</li>
            <li>Soporte</li>
            <li>Donde comprar</li>
            <li>
              <img  style= {{height : "30px", width : "30px"}}  src="https://firebasestorage.googleapis.com/v0/b/trabajoreact-f23c5.appspot.com/o/logos%2Flupa.PNG?alt=media&token=2b4656ce-2744-42ef-b3f7-176bdfd1c09a" />
              
            </li>
            </ul>
        </nav>
        </div>
    )
}
