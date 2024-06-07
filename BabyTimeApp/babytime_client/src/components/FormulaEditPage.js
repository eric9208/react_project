import { Component } from "react";
import { Formula } from "../requests"

import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import FormulaEditForm from './FormulaEditForm'


    



export const FormulaEditPage = (props) => {

    const navigate = useNavigate()
 
    const id = useParams()
    const [errors, setErrors] = useState([])

    const [formula, setFormula] = useState({})

    useEffect(() => {
      Formula.show(id.id)
      .then(formula=>{
        setFormula(formula)
        // console.log(formula);
      })
    }, [])
    
    // console.log(id.id);

    const updateFormula = (params) => {

        
        Formula.update(id.id, params)
        .then((formula) => {
            // console.log(`formula: ${formula}`);
            if (formula.errors){
                    setErrors(formula.errors)        
            } else {
                navigate('/activities')
            }
        })
        
    }
  
        return(
            <div>
                <FormulaEditForm formula={formula} errors={errors} submitForm={(params) => updateFormula(params)}/>
            </div>
        )
    

}
export default FormulaEditPage