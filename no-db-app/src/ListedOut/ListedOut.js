import React, {Component} from 'react'

class ListedOut extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    
    }

    updateInput(e){
        this.setState({
            input: e
        })
    }


    updateAmount(){
        var {updateAmountFn} = this.props;
        updateAmountFn(this.props.transKey, this.state.input, this.props.name);
        this.setState({
            input: ''
        })
}

 


    render(){
       
        var {deleteTransactionFn} = this.props;
    return(
        
        <div key = {this.props.transKey + this.props.transId} className = "listed-out">
            <div className = "transaction-info">
                <p>Transaction Name: {this.props.name}</p>
                <p className = "amount" >${this.props.amount}</p>
            </div>
            
                <button className = 'transaction-button-1'  onClick = {() => deleteTransactionFn(this.props.transId)}>Delete Transaction</button>
                <div className = "transaction-change">
                <input type = "text" placeholder = "Enter Update Amount" onChange = {(e) => this.updateInput(e.target.value)}/>
                <button className = 'transaction-button' onClick = {() => this.updateAmount()}>Change Amount</button>
            </div>
        </div>
    );
    }
}

export default ListedOut;