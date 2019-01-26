import React, { Component } from 'react';
import './App.css';

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

const dataArr = Object.entries(data).reduce((acc,next)=>{  
  return [...acc, next]
},[])

class App extends Component {
  render() {

    const carOptions = dataArr.map(el => 
    <option value={el[0]} >{`${el[0]} (${el[1].year})`}</option>)


    return (
      <div className="App">
        <select>
          <option>-- pick a model --</option>
          {carOptions}
        </select>
      </div>
    );
  }
}

export default App;
