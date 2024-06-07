import { Formula } from "../requests"
import { useState, useEffect } from "react"
import FormulaDetails from './FormulaDetails'
import { useParams } from 'react-router-dom';
import FormulaEditPage from "./FormulaEditPage";

export function withRouter(Children){
    return(props)=>{
      const match = { params: useParams() }
      return <Children {...props} match= {match} />
    }
  }

function FormulaShowPage(props){

    const [formula, setFormula] = useState({})
    useEffect(() => {
        Formula.show(props.match.params.id)
        .then(fetchedFormula=>{
          setFormula(fetchedFormula)
        //   console.log(fetchedFormula)
        })
      
      }, [])

      if(formula.no ==="no"){
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
            <FormulaDetails 
            title={formula.title}
            amount={formula.amount}
            note={formula.note}
            created_at = {formula.created_at}
            />
    <FormulaEditPage/>
        </div>
      )
      }

}

export default withRouter(FormulaShowPage)