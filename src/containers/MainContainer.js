import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    // console.log("props main container",this.props.allStocks)
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">
              {/* {console.log(this.props.id)} */}
              <StockContainer allStocks={this.props.allStocks} handleBuyStock={this.props.handleBuyStock}  />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.props.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
