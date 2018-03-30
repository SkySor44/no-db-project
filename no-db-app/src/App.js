import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CashFlow from './CashFlow.js'
import AlreadySpent from './AlreadySpent.js'
import ListedOut from './ListedOut.js'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      dollars: [],
      transactions: [],
      baseUrl: 'http://localhost:3000/api'
    }
    this.addTransaction = this.addTransaction.bind(this)
  }

  //====================================================================================================//
  //========Change this function so it posts on your server and then saves the results on state.========//
  //====================================================================================================//

  addTransaction(earned, spent, spentOn){
  var transaction = {
    amount: (+earned) - (+spent),
    name: spentOn 
  }
  axios.post(`${this.state.baseUrl}/api/transactions`, transaction).then(res => {
    this.setState({
        dollars: res.data.amount,
        transactions: res.data.name
    })
  })
 }


  render() {
    return (
      <div className="App">
        <p>{this.state.dollars}</p>
        <CashFlow addTransactionFn = {this.addTransaction}/>
        <AlreadySpent dollarsArr = {this.state.dollars} transactionsArr = {this.state.transactions}/>
      </div>
    );
  }
}

export default App;
