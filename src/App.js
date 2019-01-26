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
  state = {}

  // updateSelection = (event) => {
  //   this.setState({[event.target.value]: event.target.value})
  //   console.log(this.state)
  // }

  updateSelection = (event) => {
    this.setState({selectValue: event.target.value})
    // console.log(this.state.selectValue)
  }



// function PizzaList(props) {
//     console.log(props)
//   return (
//   <div>
//     <h1>Pizza Explorer</h1>
//     <ul>
//       { props.pizzas.map(pizza =>
//         <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
//           { pizza.name }
//         </li>
//       ) }
//     </ul>
//   </div>)

// selectPizza = (id) => {
//   this.props.dispatch({
//       type: 'SELECT_PIZZA',
//       payload: id
//   })
// }



  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    const carOptions = dataArr.map(el => 
    <option value={el[0]} >{`${el[0]} (${el[1].year})`}</option>)

    return (
      <div className="App">
        <h1>You've selected {this.state.selectValue}</h1>
        <select onChange={this.updateSelection}>
          <option>-- pick a model --</option>
          {carOptions}
          
        </select>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default App;
