import Form from 'react-bootstrap/Form';
import { Sleep } from '../requests';
import { useNavigate } from 'react-router-dom';


const SleepEditForm = (props) => {
  
    const navigate = useNavigate()
    
    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget)
        props.submitForm(
            {
                duration: fd.get("duration"),
                note: fd.get("note"),
                
            }
        )
        event.currentTarget.reset()
    }

    const deleteSleep = (id) => {
        Sleep.destroy(id)
        .then(()=>{
        navigate('/activities')
        })
        }


    return(
        <div class="d-flex">
        <form onSubmit={getDataAndSubmit}>
       <hr/>
        <div>
            <Form.Label htmlFor="duration">Duration (minutes)</Form.Label>
            <br />
        
            <Form.Control type="number"  name="duration" id="" defaultValue={props.sleep.duration}/>
        </div>
        <br/>
        <div>
            <Form.Label htmlFor="note">Note</Form.Label>
            <br />
       
            <Form.Control type="text" name="note" id="" defaultValue={props.sleep.note}/>
        </div>
        <br/>
        <div>
            <Form.Control type="submit" value="Update Sleep" className="formButton" />
        </div>
        <br/>
        <Form.Control type="button" onClick={()=> {deleteSleep(props.sleep.id)}} value="Delete Sleep" className="deleteButton" />
    </form>
    </div>
    )
}
export default SleepEditForm