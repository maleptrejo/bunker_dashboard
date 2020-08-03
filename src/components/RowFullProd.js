import React, {Component} from 'react';
import DetailsProd from './DetailsProd';
import { object } from 'prop-types';
import Elements from './Elements';

class RowFullProd extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/api/products/por_cats')
        .then(response=>response.json())
        .then(data=> {

                let productos=data.data.products
                let nombresProds=[]
                productos.forEach((prod)=>{
                    let nombre=prod.name 
                    nombresProds.push(nombre)
                })

                console.log(nombresProds)
           
            this.setState({
                data:nombresProds
            })
          
        }
        )
    }
    
    render(){
        return(
            <div className="card text-white bg-secondary mb-3 bunker_cards" >
                <div className="card-header">Listado de productos</div>
                <div className="card-body">
                    <h5 className="card-title">Títulos: </h5>

                     <div> 
                        {
                            this.state.data.map((data, i)=>{
                                return <DetailsProd key={i} title={data} />
                            })
                        }

           {/* {Object.keys(this.state.data).map((keyName, keyIndex) => {
              
                return <Elements key={keyIndex} title={keyName} valor={this.state.data[keyName]}/>
           })}  */}
                   </div>  
          
                </div>
            </div>
            )
        }
        
        
        
    }
    export default RowFullProd
    