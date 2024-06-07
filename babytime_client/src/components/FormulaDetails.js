import React from 'react'
import moment from 'moment'

const FormulaDetails = ({title,amount,note,created_at}) =>{
    return(
        <div>
            <h3> {title} </h3>
            <br/>
            <p> Amount: {amount} ml </p>
            <br/>
            <p> Note: {note} </p>
            <br/>
            <p> <small> Created at: {moment(created_at).format("dddd, MMMM Do YYYY")} 
            </small></p>
          
           
          
          

        </div>
    )
}

export default FormulaDetails