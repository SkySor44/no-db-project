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
                <div className = "inputs">
                    <input value = {this.state.earned} className = "earned" type = "text" placeholder = "Enter amount made..." onChange = {(e) => this.updateEarned(e.target.value)}/>
                    <input value = {this.state.spentOn} className = "spentOn" type = "text" placeholder = "What did I spend it on?" onChange ={(e) => this.updateSpentOn(e.target.value) }/>
                    <input value = {this.state.spent} className = "spent" type = "text" placeholder = "Enter amount spent..." onChange = {(e) => this.updateSpent(e.target.value)}/>
                </div>
                <div className = "add-btn-contain">
                    <button className = "add-btn" onClick = {() => this.addToParent()}>ADD</button>
                </div>
            </div>
        )
    }
}

export default CashFlow;