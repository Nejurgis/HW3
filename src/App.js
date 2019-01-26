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




// Turning each object as an array
const dataArr = Object.entries(data).reduce((acc,next)=>{  
  return [...acc, next]
},[])



const mapStateToProps = (state) => {
  return {
    selectedObject: state.selectValue
  }
}

// SOLUTION
  // check if this.state.selectValue is in the object, yes? return obj
  // console.log(Object.values(data))
  
  




class App extends Component {
  state = {selectValue:''}
  

  updateSelection = (event) => {
    this.setState({
      selectValue: event.target.value,
    })
    console.log(this.state.selectValue)
    const string = JSON.stringify(this.state.selectValue)
    console.log(string)
    console.log(data[string])
    console.log(data['Bally Astrocade'])
    console.log(data[String(this.state.selectValue)])
    console.log(this.state.selectValue) 
  }



  

  // Need to get the data of the current selected item
  // in order to put it into the payload
  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MODEL',
      payload: data[String(this.state.selectValue)]
    })
  }

  

  render() {
    const search = Object.keys(data).find(key=> key === this.state.selectValue)

    console.log(data[` "+ ${search}+" `])




    const carOptions = dataArr.map(el => 
    <option value={el[0]} >{`${el[0]} (${el[1].year})`}</option>
    )

    return (
      <div className="App">
        <h1>You've selected {this.state.selectValue}</h1>
        <select value={this.state.selectValue} onChange={this.updateSelection}>
          <option>-- pick a model --</option>
          {carOptions}
          {/* {dataArr.map(el => console.log(el[1].manufacturer) )} */}
          
        </select>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, {addModelAction})(App);
