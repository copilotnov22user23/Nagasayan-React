//import logo from './logo.svg';
//import './App.css';
//import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stockrows } from './stockrow/Stockrows';
import { getAllStocks } from './apis/stockapi';
import { useEffect, useState } from 'react';





function App() {

  //useState
  const [stock, setStock] = useState([ ]);

  //useEffect
  // useEffect(() => {
  //   fetch('http://cloud.iexapis.com/stable/stock/market/list/gainers?token=pk_4a8b2c4c4d6e4e3e9a4e1a5e2c7e4b3e')
  //     .then(response => response.json())
  //     .then(data => setStock(data))
  // }, []);

  //useEffect fetch data from stockapi.js
  useEffect(() => {
    getAllStocks()
      .then(data => setStock(data))
      .catch(error => console.error(error));
  }, []);


  return (
    // 
    <div className="container">
      
      {/* {stock.map((stock, index) => {
      return(
        <div className="row">
          <div className="col-2">{stock.symbol}</div>
          <div className="col-2">{stock.companyName}</div>
          <div className="col-2">{stock.primaryExchange}</div>
          <div className="col-2">{stock.sector}</div>
          <div className="col-2">{stock.latestPrice}</div>
          <div className="col-2">{stock.marketCap}</div>
        </div>
      )
      })} */
      
      }
      <div className="row">
{stock.map((stock, index) => {
      return(
        <Stockrows key={index} stock={stock}
         symbol={stock.symbol}      
         companyName={stock.companyName}
         primaryExchange={stock.primaryExchange}
         sector={stock.sector}
         latestPrice={stock.latestPrice}
         marketCap={stock.marketCap}
         dayHigh={stock.dayHigh}
         dayLow={stock.dayLow}
         
        />

      )

      })
    }
    </div>
    </div>
    
  );
}

export default App;
