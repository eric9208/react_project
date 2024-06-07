import { Diaper } from "../requests"
import { useState, useEffect } from "react"
import DiaperDetails from './DiaperDetails'
import { useParams } from 'react-router-dom';
import DiaperEditPage from "./DiaperEditPage";

export function withRouter(Children){
    return(props)=>{
      const match = { params: useParams() }
      return <Children {...props} match= {match} />
    }
  }

function DiaperShowPage(props){

    const [diaper, setDiaper] = useState({})
    useEffect(() => {
        Diaper.show(props.match.params.id)
        .then(diaper=>{
          setDiaper(diaper)
        })
      
      }, [])

      if(diaper.no ==="no"){
        return(
          <>
          <div class="d-flex justify-content-center" style={{fontSize:"5em", marginTop:"5vh"}}> Not Authorized
          </div>
          <div class="d-flex justify-content-center" style={{fontSize:"2em", marginTop:"5vh"}}> Please Go back
          </div>
          </>
        )
      } else{
      

      return(
        <div class="d-flex flex-column" style={{padding:"20px", width:"50vw"}}>
          
            <DiaperDetails 
            id={diaper.id}
            title={diaper.title}
            note={diaper.note}
            created_at = {diaper.created_at}
            />
           
    <DiaperEditPage/>
  
        </div>
      )
    }

}

export default withRouter(DiaperShowPage)