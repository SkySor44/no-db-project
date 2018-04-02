import React, {Component} from 'react'
import FaTrash from 'react-icons/lib/fa/trash'

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
        var date = new Date();
    return(
        
        <div key = {this.props.transKey + this.props.transId} className = "listed-out">
            <div className = "transaction-info">
                <p>Transaction Name: {this.props.name}</p>
                <p className = "amount" >${this.props.amount}</p>
                <p className = "date">{`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`}</p>
            </div>
            
                <button className = 'transaction-button-1'  onClick = {() => deleteTransactionFn(this.props.transId)}>Delete Transaction<FaTrash/></button>
                <div className = "transaction-change">
                <input className = "update-amt" type = "text" placeholder = "Enter Update Amount" onChange = {(e) => this.updateInput(e.target.value)}/>
                <button className = 'transaction-button' onClick = {() => this.updateAmount()}>Change Amount</button>
            </div>
        </div>
    );
    }
}

export default ListedOut;