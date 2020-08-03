import React from 'react';


function Elements(props) {
    return (
   
            <div className="card-body">
               <p>{props.title} : {props.valor}</p> 
            </div>
     

        )
    }
    
    export default Elements