import React, {Component} from 'react';

class RowTotalProd extends Component{
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
            data:data.data
        })
        
    }
    )
}

render(){
    return(
        <div className="card text-white bg-secondary mb-3 bunker_cards" >
  <div className="card-header">Productos</div>
  <div className="card-body">
    <h5 className="card-title">Total de productos: </h5>
    <p className="card-text">{this.state.data.count}</p>
  </div>
</div>
    )
}



}
export default RowTotalProd
