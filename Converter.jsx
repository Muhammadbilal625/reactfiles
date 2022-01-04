import React from 'react'
import { useState } from 'react';

function Converter() {

    const [km, setkm] = useState(0)

    function handleChange(e){
        setkm(e.target.value);
    }
    function converter(km){
return (km/1.609);

    }
    return (
        <div>
         <input type="text" value={km} onChange={handleChange}  />   
         <h3>
             {km} km is {converter(km)} miles
             </h3>
        </div>
    )
}

export default Converter
