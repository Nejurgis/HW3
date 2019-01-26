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

const mapStateToProps = (state) => {
  return {
    selectedObject: state.selectValue
  }
}

class App extends Component {
  state = {selectValue:''}
  
  updateSelection = (event) => {
    this.setState({
      selectValue: event.target.value,
    })
  }

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MODEL',
      payload: data[String(this.state.selectValue)]
    })
  }

  render() {
    const computerOptions = dataArr.map(el => 
    <option value={el[0]} >{`${el[0]} (${el[1].year})`}</option>
    )

    return (
      <div className="App">
        <h1>You've selected {this.state.selectValue}</h1>
        <select value={this.state.selectValue} onChange={this.updateSelection}>
          <option>-- pick a model --</option>
          {computerOptions}
          
        </select>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, {addModelAction})(App);
