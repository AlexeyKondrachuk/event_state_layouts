
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';
import IconSwitch from'../Components/IconSwith/IconSwith'
import { useState } from 'react';
import '../App.css'


function Store() {
  
const [view, setView] = useState(false)



const handelState = () => {
  setView(!view)
}
 
  return (
    <div className='store'>
  
<button className='button_store' onClick={handelState}><IconSwitch  /></button>

{view === true ? <CardsView /> : <ListView />}

</div>
  );
}


export default Store
