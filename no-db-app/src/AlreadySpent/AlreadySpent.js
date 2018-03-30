import React from 'react'
import ListedOut from '/../Users/skylersorensen/src/no-db-project/no-db-project/no-db-app/src/ListedOut/ListedOut'

function AlreadySpent(props){
    var total = 0;
    var earned = 0;
    var spent = 0;
    var {transactionsArr} = props;
    if (transactionsArr) {var mappedTransactions = transactionsArr.map((e, i ) => {
       total += +e.amount;
       earned += +e.amount > 0 ? +e.amount : null;
       spent += +e.amount < 0 ? +e.amount : null;
    
    return (
        <div key = {i}>
            <ListedOut transKey = {i} name = {e.name} amount= {e.amount} transId = {e.id} deleteTransactionFn = {props.deleteTransactionFn} updateAmountFn = {props.updateAmountFn} />
            </div>
        )
    })}
    
    return(
        <div>
            <div className = "totals">
                <h3 className = "earn-total">Earned: ${earned}</h3>
                <h3 className = "spent-total">Spent: ${spent}</h3>
            </div>  
            <div className = "cash-contain"> 
                <h1>CASHFLOW: ${total}</h1>
            </div> 
        {mappedTransactions} 
        
         </div> 
     )
}

 export default AlreadySpent;