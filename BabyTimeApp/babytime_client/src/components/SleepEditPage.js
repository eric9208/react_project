import { Component } from "react";
import { Sleep } from "../requests"

import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import SleepEditForm from './SleepEditForm'


    



export const SleepEditPage = (props) => {

    const navigate = useNavigate()
 
    const id = useParams()
    const [errors, setErrors] = useState([])

    const [sleep, setSleep] = useState({})

    useEffect(() => {
      Sleep.show(id.id)
      .then(sleep=>{
        setSleep(sleep)
        
      })
    }, [])
    
    // console.log(id.id);

    const updateSleep = (params) => {

        
        Sleep.update(id.id, params)
        .then((sleep) => {
            // console.log(`sleep: ${sleep}`);
            if (sleep.errors){
                    setErrors(sleep.errors)        
            } else {
                navigate('/activities')
            }
        })
        
    }
  
        return(
            <div>
                <SleepEditForm sleep={sleep} errors={errors} submitForm={(params) => updateSleep(params)}/>
            </div>
        )
    

}
export default SleepEditPage