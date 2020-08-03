import React from 'react';


function User(props) {
    return (
   
            <div className="card-body">
               <h5> Usuario: {props.id} </h5> 
               <p>Name: {props.name}</p>
               <p>Email: {props.email}</p>
               <p>Detail: {props.detail}</p>
            </div>
     

        )
    }
    
    export default User