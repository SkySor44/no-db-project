import React, {Component} from 'react'


class CashFlow extends Component {
    constructor(){
        super()
        this.state = {
            earned: '',
            spent: '',
            spentOn: ''
        }
    } 

    updateEarned(e){
        this.setState({
            earned: e
        })
    }

    updateSpent(e){
        this.setState({
            spent: e
        })
    }

    updateSpentOn(e){
        this.setState({
            spentOn: e
        })
    }

    addToParent(){
        var {addTransactionFn} = this.props;
        addTransactionFn(this.state.earned, this.state.spent, this.state.spentOn);
        this.setState({
            earned: '',
            spent: '',
            spentOn: ''
        })
    }

    render(){
        return(
            <div className = "">
                <input className = "earned" type = "text" placeholder = "How much bacon am I bringing home?" onChange = {(e) => this.updateEarned(e.target.value)}/>
                <input className = "spentOn" type = "text" placeholder = "What did I spend it on?" onChange ={(e) => this.updateSpentOn(e.target.value) }/>
                <input className = "spent" type = "text" placeholder = "How much money am I giving away?" onChange = {(e) => this.updateSpent(e.target.value)}/>
                <button onClick = {() => this.addToParent()}>Add</button>
            </div>
        )
    }
}

export default CashFlow;