import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'





class App extends Component {
  constructor(){
    super()
    this.state = {
      allStocks : [],
      portfolioStocks: []
    }
  }
  

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        allStocks: stocks
      })
    })
  }

  handleBuyStock = (stock) => {
    // console.log("did i click on the stock?",stock)
      this.setState( previousState => {
        // console.log("previousState", previousState)
        // console.log("portfolioStocks", previousState.portfolioStocks)
        return {
          portfolioStocks: [...previousState.portfolioStocks, stock]
        }
      })
  }
  // remove the stock when you click on it, have a counter that increments when you buy more than one stock.
  // fiter by prce and alphabetically 

  // connect to filter drop down 
  






    render() {
      // console.log("portfolio stocks in render", this.portfolioStocks)
      return (
        <div>
          <Header/>
          <MainContainer allStocks={this.state.allStocks}  handleBuyStock={this.handleBuyStock}  portfolioStocks={this.state.portfolioStocks} />
        </div>
      );
    }
  
}
export default App;
