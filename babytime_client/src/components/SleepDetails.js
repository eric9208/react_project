
import React from 'react'
import moment from 'moment'

const SleepDetails = ({title,duration,note,created_at}) =>{
    return(
        <div>
            <h3> {title} </h3>
            <br/>
            <p> Duration: {duration} mins</p>
            <br/>
            <p> Note: {note} </p>
            <br/>
            <p> <small> Created at: {moment(created_at).format("dddd, MMMM Do YYYY")} 
            </small></p>
        
          
          

        </div>
    )
}

export default SleepDetails