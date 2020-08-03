import React, {Component} from 'react';
import DetailsProd from './DetailsProd';
import { object } from 'prop-types';
import Elements from './Elements';
import User from './User';

class RowFullUsers extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/users/list')
        .then(response=>response.json())
        .then(data=> {

                // let productos=data.data.products
                // let nombresProds=[]
                // productos.forEach((prod)=>{
                //     let nombre=prod.name 
                //     nombresProds.push(nombre)
                // })

                // console.log(nombresProds)
           
            this.setState({
                data:data.data.fields
            })
          console.log(data.data.fields)
        }
        )
    }
    
    render(){
        return(
            <div className="card text-white bg-secondary mb-3 bunker_cards" >
                <div className="card-header">Listado de usuarios</div>
                <div className="card-body">
                    <h5 className="card-title">Datos: </h5>

                     <div> 
                        {
                            this.state.data.map((data, i)=>{
                                return <User key={i} id={data.id} name={data.name} detail={data.detail} email={data.email}/>
                            })
                        }

                   </div>  
          
                </div>
            </div>
            )
        }
        
        
        
    }
    export default RowFullUsers
    