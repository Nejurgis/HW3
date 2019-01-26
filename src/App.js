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

const test = Object.entries(data).reduce((acc,next)=>{  
  return [...acc, next]
},[])
// const another = test.map(el=>el)

// el[0] = name
// el[1].year = year

// returns 4 arrays
// each array has object
// object has keys
{/* <option value={el.manufacturer}>{el}</option> */}
class App extends Component {


  render() {
    return (
      <div className="App">
        <select>
        {test.map(el => <option key={Math.random()} label={el[0]+ ' ' + el[1].year} ></option>   )}
        </select>
      </div>
    );
  }
}

export default App;
