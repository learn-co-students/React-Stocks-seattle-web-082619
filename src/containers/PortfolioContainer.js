import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  mapOverPorfolioStocks = () => {
    return this.props.portfolioStocks.map( (stock) => {
      return <Stock stock={stock} />
    })
  }



  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.mapOverPorfolioStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
