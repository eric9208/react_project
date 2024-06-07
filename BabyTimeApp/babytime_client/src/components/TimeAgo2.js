import { useState, useEffect } from "react"
import moment from 'moment'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Activity } from "../requests";


function TimeAgo2({activity}){
  const [sleepAgo, setSleepAgo] = useState('')
  const [diaperAgo, setDiaperAgo] = useState('')
  const [formulaAgo, setFormulaAgo] = useState('')

    
useEffect(() => {
   
    setInterval(()=> {
        let sleepCount = 0
        let diaperCount = 0
        let formulaCount = 0
        let masterCount = 0
        activity.map((element,i) => {
            if(masterCount === 1){
             return
            }
             if (sleepCount === 1 && diaperCount === 1 && formulaCount === 1){
                 masterCount++
                
             }
             if( sleepCount === 0 && element.title === "Sleep"){
                 let date = new Date(element.created_at)  
                 setSleepAgo(moment(date).fromNow())
                 sleepCount = 1
                   
             }
             if( diaperCount === 0 && element.title==="Diaper"){
                 let date = new Date(element.created_at)  
                 setDiaperAgo(moment(date).fromNow())
                 diaperCount = 1
                   
             }
             if( formulaCount === 0 && element.title==="Formula"){
                 let date = new Date(element.created_at)  
                 setFormulaAgo(moment(date).fromNow())
                 formulaCount = 1
                   
             }
         })

    },1000)
    

 
}, [])


    
    return(
        <>
        <p>{sleepAgo}</p>
        <p>{diaperAgo}</p>
        <p>{formulaAgo}</p>
        
        </>

    )

}

export default TimeAgo2