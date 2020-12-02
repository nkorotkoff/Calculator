import React from 'react';
import './Key.css';
function Key({value,classN,getValue,getOperator,changeInput}) {
   return (
      <div className={(`${classN}`)+' item'} onClick={()=>{if(classN==="number"){getValue(value)} else getOperator(value) }}>
         <li>{value}</li>
      </div>
   );
}

export default Key;  