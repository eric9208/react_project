import Form from 'react-bootstrap/Form';
import { Diaper } from '../requests';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import { useState, useEffect} from 'react';




const DiaperEditForm = (props) => {
    const navigate = useNavigate()
   


  
    


    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget)
        props.submitForm(
            {
                note: fd.get("note"),
              
               
                
            }
        )
        event.currentTarget.reset()
    }

    const deleteDiaper = (id) => {
        Diaper.destroy(id)
        .then(()=>{
        navigate('/activities')
        })
        }


       
    return(
        <div class="d-flex">
        <form onSubmit={getDataAndSubmit}>
       <hr />
        <div >
            <Form.Label htmlFor="note">Note</Form.Label>
            <br/>
       
            <Form.Control type="text" name="note" id="" defaultValue={props.diaper.note}/>
        </div>
        <br/>
      
        <div>
            <Form.Control type="submit" value="Update Diaper" className="formButton"/>
        </div>
        <br/>
        <Form.Control type="button" onClick={()=> {deleteDiaper(props.diaper.id)}} value="Delete Diaper" className="deleteButton" />
    </form>
    
   </div>
    )
}
export default DiaperEditForm