import React from 'react';
import Key from '../Key/Key';
import './Keypad.css'
function Keypad({numbers,operators,getValue,getOperator,doOperation,Clear}) {
   return (
      <div className="Keypad">
         <div className="clear" onClick={()=>{Clear()}}>Clear</div>
         {numbers.map((number,index)=>(
            <Key classN={'number'} key={index} value={number} getValue={getValue}  />
         ))}
         {
            operators.map((operator,index)=>(
               <Key classN={'operator'} key={index} value={operator} getOperator={getOperator}  />
            ))
         }
         <button className="equals" onClick={doOperation}>=</button>
      </div>
   );
}

export default Keypad;