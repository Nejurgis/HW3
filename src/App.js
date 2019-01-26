import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addModelAction } from './actions/addModelAction'
import store from './store'

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





const mapStateToProps = (state) => {
  return {
    selectedObject: state.selectValue
  }
}


class App extends Component {
  state = {}

  updateSelection = (event) => {
    this.setState({selectValue: event.target.value})
  }

  // Need to get the data of the current selected item
  // in order to put it into the payload
  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MODEL',
      payload: this.state.selectValue
    })
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

export default connect(mapStateToProps, {addModelAction})(App);
