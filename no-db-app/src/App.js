import React, { Component } from 'react';
import './App.css';
import CashFlow from './CashFlow/CashFlow.js'
import AlreadySpent from './AlreadySpent/AlreadySpent.js'
import DeleteAll from './DeleteAll/DeleteAll.js'

import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: []
    }
    this.addTransaction = this.addTransaction.bind(this)
    this.deleteTransaction = this.deleteTransaction.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.deleteAll = this.deleteAll.bind(this)
  }

componentDidMount(){
  axios.get('/api/transactions').then(res => {
console.log(res.data)
    this.setState({
      transactions: res.data
    })
  })
  var {transactions} = this.state;
  var newTotal = transactions.reduce((a,b) => {
    return a + b.x;
  }, 0) 
  console.log(newTotal)
  this.setState({
    total: newTotal
  })
}


  addTransaction(earned, spent, spentOn){
  var transaction = {
    amount: (+earned) - (+spent),
    name: spentOn 
  }
  axios.post(`/api/transactions`, transaction).then(res => {
    this.setState({
        transactions: res.data
    })
  })
}

  deleteAll(){
    axios.delete('/api/transactions').then(res => {
      this.setState({
        transactions: res.data
      })
    })
  }


 deleteTransaction(id){
    axios.delete(`/api/transactions/${id}`).then(res => {
      this.setState({
        transactions: res.data
      })
    })
 }

 updateAmount(id, newAmount, name){
  var updatedTransaction = {
    name: name,
    amount: newAmount,
    id: id
  } 
  axios.put(`/api/transactions/${id}`, updatedTransaction).then(res => {
     this.setState({
       transactions: res.data
     })
   })
 }

  render() {
    return (
      <div className="App">
        <h1 className = "tracker" >$Tracker</h1>
        <div className = "header">
            <h3 className = "delete-button-intro">Start Fresh:</h3>
            <DeleteAll deleteAllFn = {this.deleteAll}/>
        </div>
        <div className = "titles">
          <h3>Earned:</h3>
          <h3>Transaction Name:</h3>
          <h3 className = "spent-title">Spent:</h3>
        </div>
        <CashFlow addTransactionFn = {this.addTransaction}/>
        <div className = "section2">
        <AlreadySpent transactionsArr = {this.state.transactions} deleteTransactionFn = {this.deleteTransaction} updateAmountFn = {this.updateAmount}/>
        </div>
        <div className = "last-btn">
          <DeleteAll deleteAllFn = {this.deleteAll} />
        </div>
      </div>
    );
  }
}

export default App;
