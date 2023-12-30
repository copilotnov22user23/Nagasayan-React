import React from 'react'

export const Stockrows = (props) => {
  return (
   //display stock data using bootstrap cards
   <div className="col-md-4 py-3"> 
    <div className="card" >
      <div className="card-body">
      <div className="card-text">{props.symbol}</div>
      <div className="card-text">{props.companyName}</div>
      <div className="card-text">{props.primaryExchange}</div>
      <div className="card-text">{props.sector}</div>
      <div className="card-text">{props.latestPrice}</div>
      <div className="card-text">{props.marketCap}</div>
      <div className="card-text">{props.dayHigh}</div>
      <div className="card-text">{props.dayLow}</div>
    </div>
    </div>
    </div>
  )
}
