import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderAllStocks = () => {
    // console.log(this.props,"props")
    return this.props.allStocks.map((stock ,id) => {
      return <Stock stock={stock} key={stock.id} handleBuyStock={this.props.handleBuyStock}/>
    }) 
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.renderAllStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
