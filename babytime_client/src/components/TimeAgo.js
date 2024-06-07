import { useState, useEffect } from "react"
import moment from 'moment'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Activity } from "../requests";


function TimeAgo({activity}){
  

    let sleepCount = 0
    let diaperCount = 0
    let formulaCount = 0
    let masterCount = 0
    let sleepAgo = ''
    let diaperAgo = ''
    let formulaAgo = ''
    
    return(
        <>
        {
          
            activity.map((element,i) => {
                if(masterCount === 1){
                 return
                }
                 if (sleepCount === 1 && diaperCount === 1 && formulaCount === 1){
                     masterCount++
                     return (
                         <>

<Container style={{marginBottom: "2vh", marginTop: "2vh"}}>
            <Row className="justify-content-md-center" style={{textAlign:"center"}}>
            
            <Col xs lg="3">
            <div class="d-flex flex-column">
              <small>Last Sleep</small>
              </div>
            <div class="d-flex flex-column" style={{color:"#779ecb"}}>
              {sleepAgo}
              </div>
            </Col>
            <Col xs lg="3">
            <div class="d-flex flex-column">
     
            <small>Last Diaper</small>
              </div>
            <div class="d-flex flex-column" style={{color:"#cf9180"}}>
     
              {diaperAgo}
              </div>
              </Col>
              <Col xs lg="3">
              <div class="d-flex flex-column">
          
              <small>Last Formula</small>
            </div>
              <div class="d-flex flex-column" style={{color:"#a3c387"}}>
          
            {formulaAgo}
            </div>
            </Col>
            
            </Row>
            </Container>
                      
                         </>  
                     ) 
                 }
                 if( sleepCount === 0 && element.title === "Sleep"){
                     let date = new Date(element.created_at)  
                     sleepAgo = moment(date).fromNow()
                     sleepCount = 1
                       
                 }
                 if( diaperCount === 0 && element.title==="Diaper"){
                     let date = new Date(element.created_at)  
                     diaperAgo = moment(date).fromNow()
                     diaperCount = 1
                       
                 }
                 if( formulaCount === 0 && element.title==="Formula"){
                     let date = new Date(element.created_at)  
                     formulaAgo = moment(date).fromNow()
                     formulaCount = 1
                       
                 }
             })
          
            
        }
        
        </>

    )

}

export default TimeAgo