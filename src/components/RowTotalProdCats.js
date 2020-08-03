import React, {Component} from 'react';
import Elements from './Elements';
import { object } from 'prop-types';

class RowTotalProdCats extends Component{
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
            this.setState({
                data:data.data.countByCategory
            })
        }
        )
    }
    
    render(){
        return(
            <div className="card text-white bg-secondary mb-3 bunker_cards" >
                <div className="card-header">Productos</div>
                <div className="card-body">
                    <h5 className="card-title">Total de productos por categoría: </h5>
            
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
    export default RowTotalProdCats
    