
import { useState } from 'react';
import '../IconSwith/IconSwith.css'

function IconSwith() {


  const [icon, setIcon] = useState("view_list");

  function Swith() {
  if (icon === "view_list") {
  setIcon("view_module");
  } else {
  setIcon("view_list");
  }
  }
 

  return (
      <span style={{'cursor': "pointer", 
               
               
 }}>
 <i 
       className={'material-icons'}
       onClick={Swith}
       style={{'fontSize': "50px"}}
     >{icon}
   </i>
 </span> 

  )
}

export default IconSwith