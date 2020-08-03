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
            let totalCats=Object.keys(data.data.countByCategory).length
            this.setState({
                data:totalCats
            })

        }
        )
    }
    
    render(){
        return(
            <div className="card text-white bg-secondary mb-3 bunker_cards" >
                <div className="card-header">Productos</div>
                <div className="card-body">
                    <h5 className="card-title">Total de categorías: </h5>
                    <p className="card-text">{this.state.data}</p>
                </div>
            </div>
            )
        }
        
        
        
    }
    export default RowTotalProdCats
    