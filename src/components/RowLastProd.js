import React, {Component} from 'react';
import DetailsProd from './DetailsProd';
import { object } from 'prop-types';
import Elements from './Elements';

class RowLastProd extends Component{
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
            let producto={
                id:data.data.products[data.data.products.length-1].id,
                name:data.data.products[data.data.products.length-1].name,
                detail:data.data.products[data.data.products.length-1].detail,
                description:data.data.products[data.data.products.length-1].description
            }
          
            this.setState({
                data:producto
            })
            // console.log(data.data.products[data.data.products.length-1].id)
            // console.log(data.data.products[data.data.products.length-1].name)
            // console.log(data.data.products[data.data.products.length-1].detail)
            // console.log(data.data.products[data.data.products.length-1].description)
            console.log(producto)
        }
        )
    }
    
    render(){
        return(
            <div className="card text-white bg-secondary mb-3 bunker_cards" >
                <div className="card-header">Último producto</div>
                <div className="card-body">
                    <h5 className="card-title">Detalles: </h5>

                    <div> 
           
           {Object.keys(this.state.data).map((keyName, keyIndex) => {
              
                return <Elements key={keyIndex} title={keyName} valor={this.state.data[keyName]}/>
           })} 
                   </div> 
          
                </div>
            </div>
            )
        }
        
        
        
    }
    export default RowLastProd
    