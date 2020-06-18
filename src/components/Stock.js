import React from 'react'

const Stock = (props) => (
  <div >
    
    {/* {console.log("props inprops)} */}
    {/* {console.log(props)}s */}
    {/* {console.log(this.props)} */}
    
  {/* {console.log(props)} */}
  {/* {console.log("props id", props.stock.id)} */}
    <div className="card" onClick={() => props.handleBuyStock(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">
          {
            //Company Name
            props.stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
