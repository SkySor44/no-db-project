import React, {Component} from 'react'
import ListedOut from './ListedOut.js'

function AlreadySpent(props){
    var {dollarsArr, transactionsArr} = this.props;
    var mappedDollars = dollarsArr.map((e, i) => {
        return (
            <ListedOut key = {i} amount = {e}/>
        )
    })

    var mappedTransactions = transactionsArr.map((e, i ) => {
        return (
            <ListedOut transKey = {i} name = {e}/>
        )
    })
    
    return(
        <div>
       {mappedTransactions}
        {mappedDollars}
        </div>
    )
}

export default AlreadySpent;