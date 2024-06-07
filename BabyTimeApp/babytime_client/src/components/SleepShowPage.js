import { Sleep } from "../requests"
import { useState, useEffect } from "react"
import SleepDetails from './SleepDetails'
import { useParams } from 'react-router-dom';
import SleepEditPage from "./SleepEditPage";

export function withRouter(Children){
    return(props)=>{
      const match = { params: useParams() }
      return <Children {...props} match= {match} />
    }
  }

function SleepShowPage(props){

    const [sleep, setSleep] = useState({})
    useEffect(() => {
        Sleep.show(props.match.params.id)
        .then(sleep=>{
          setSleep(sleep)
        //   console.log(fetchedFormula)
        })
      
      }, [])

      if(sleep.no ==="no"){
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
        <div class="d-flex flex-column" style={{padding:"20px"}}>
            <SleepDetails 
            title={sleep.title}
            duration={sleep.duration}
            note={sleep.note}
            created_at = {sleep.created_at}
            />
    <SleepEditPage/>
        </div>
      )

      }
}

export default withRouter(SleepShowPage)