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
            <p>$$$: {this.props.amount} Transaction Name: {this.props.name}</p>
            <button onClick = {() => deleteTransactionFn(this.props.transId)}>Delete Transaction</button>
            <input type = "text" placeholder = "Enter Update Amount" onChange = {(e) => this.updateInput(e.target.value)}/>
            <button onClick = {() => this.updateAmount()}>Change Amount</button>
            
        </div>
    );
    }
}

export default ListedOut;