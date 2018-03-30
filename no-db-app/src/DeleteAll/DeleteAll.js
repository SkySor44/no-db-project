import React, {Component} from 'react'

class DeleteAll extends Component{
    constructor(){
        super()

    }

    deleteEverything(){
        var {deleteAllFn} = this.props;
        deleteAllFn();
    }

    render(){
    return(
        <div>
            
            <button className = 'delete-all' onClick = {() => this.deleteEverything()}>DELETE ALL</button>
        </div>
    )
    } 
}

export default DeleteAll