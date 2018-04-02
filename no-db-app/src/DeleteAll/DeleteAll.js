import React, {Component} from 'react'
import FaTrash from 'react-icons/lib/fa/trash'

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
            
            <button className = 'delete-all' onClick = {() => this.deleteEverything()}>DELETE ALL<FaTrash/></button>
        </div>
    )
    } 
}

export default DeleteAll