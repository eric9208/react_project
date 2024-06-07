import { Component } from "react";
import { Diaper } from "../requests"

import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import DiaperEditForm from './DiaperEditForm'


    



export const DiaperEditPage = (props) => {

    const navigate = useNavigate()
 
    const id = useParams()
    const [errors, setErrors] = useState([])

    const [diaper, setDiaper] = useState({})

    useEffect(() => {
      Diaper.show(id.id)
      .then(diaper=>{
        setDiaper(diaper)
   
      })
    }, [])
    


    const updateDiaper = (params) => {

        
        Diaper.update(id.id, params)
        .then((diaper) => {
            if (diaper.errors){
                    setErrors(diaper.errors)        
            } else {
                navigate('/activities')
            }
        })
        
    }
    


        return(
            <div>
                <DiaperEditForm diaper={diaper} errors={errors} submitForm={(params) => updateDiaper(params)}/>
            </div>
        )
    

}
export default DiaperEditPage