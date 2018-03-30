import React, {Component} from 'react'


function ListedOut(props){
    return(
        <div key = {this.props.key}>
            <p>{this.props.name}</p>
            <p>{this.props.amount}</p>
        </div>
    )
}

export default ListedOut;