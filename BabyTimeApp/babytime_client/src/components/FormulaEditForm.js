import Form from 'react-bootstrap/Form';
import { Formula } from '../requests';
import { useNavigate } from 'react-router-dom';

const FormulaEditForm = (props) => {
 
    const navigate = useNavigate()

    const getDataAndSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget)
        props.submitForm(
            {
                amount: fd.get("amount"),
                note: fd.get("note"),
                
            }
        )
        event.currentTarget.reset()
    }

 const deleteFormula = (id) => {
        Formula.destroy(id)
        .then(()=>{
        navigate('/activities')
        })
        }

    return(
        <div class="d-flex">
        <form onSubmit={getDataAndSubmit}>
        <hr/>
        <div>
            <Form.Label htmlFor="amount">Amount</Form.Label>
            <br />
            <Form.Control type="number" name="amount" id="" defaultValue={props.formula.amount}/>
        </div>
        <br/>
        <div>
            <Form.Label htmlFor="note">Note</Form.Label>
            <br />
            <Form.Control type="text" name="note" id="" defaultValue={props.formula.note}/>
        </div>
        <br/>
        <div>
            <Form.Control type="submit" value="Update Formula" className='formButton'/>
        </div>
        <br/>
        <Form.Control type="button" onClick={()=> {deleteFormula(props.formula.id)}} value="Delete Formula" className="deleteButton" />
    </form>
    </div>
    )
}
export default FormulaEditForm