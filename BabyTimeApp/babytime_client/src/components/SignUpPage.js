import { User } from '../requests'
import { useNavigate } from 'react-router-dom'

function SignUpPage(props) {
  const { onSignUp } = props
  
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const { currentTarget } = event;
    const formData = new FormData(currentTarget)
    const params = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    }

    User.create(params).then(data => {
      if (data.id) {
        onSignUp()
        // Navigated to Index page from the browser
        // We can 'push' on history to manipulate the browser
        // and direct our user to any page in our app
        // props.history.push('/questions') <--- not working
        navigate('/')
      }
    })
  }

  return(
    <>
    
    <div class="d-flex flex-row" style={{textAlign:"center"}}>
      <div class="signPage" style={{width:"50vw", height:"100vh"}}>

      </div>
      
    <br/>
      <div class="card" style={{textAlign:"center",width:"30vw", marginLeft:'10vw', marginTop:"5vh", margin:"auto", padding:"20px", backgroundColor:"#c1e1df", border:"#c1e1df"}}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <div class="mb-3" >
          <label htmlFor='first_name' class="form-label">First name</label>
          <input type="text" name="first_name" id="first_name" class="form-control"/>
        </div>
        <div class="mb-3" >
          <label htmlFor='last_name' class="form-label">Last name</label>
          <input type="text" name="last_name" id="last_name" class="form-control"/>
        </div>
        <div class="mb-3" >
          <label htmlFor='email' class="form-label">Email</label>
          <input type="text" name="email" id="email" class="form-control"/>
        </div>
        <div class="mb-3" >
          <label htmlFor='password' class="form-label">Password</label>
          <input type="password" name="password" id="password" class="form-control"/>
        </div>
        <div class="mb-3" >
          <label htmlFor='password_confirmation' class="form-label">Confirm Password</label>
          <input type="password" name="password_confirmation" id="password_confirmation" class="form-control"/>
        </div>
        <input type="submit" value="Sign Up" class="btn btn-light" />
      </form>
      </div>
    </div>
    </>
  )
}

export default SignUpPage