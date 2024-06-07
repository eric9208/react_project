import { Session } from "../requests";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


function SignInPage(props) {
    const { onSignIn } = props
    const navigate = useNavigate()

    function handleSubmit(event) {

        event.preventDefault()
        const { currentTarget } = event;
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        Session.create(params).then(data => {
            if (data.id) {
                onSignIn()
                navigate('/')
            }
        })
    }

    return (

        <div class="d-flex flex-row" style={{ textAlign: "center" }}>
            <div class="signPage" style={{ width: "50vw", height: "100vh" }}>

            </div>

            <br />
            <div class="card signForm">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3" >
                        <label htmlFor='email' class="form-label"> Email</label>
                        <input type="text" name="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor='password' class="form-label"> Password</label>
                        <input type="password" name="password" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input type="submit" value="Sign In" class="btn btn-light" />
                    </div>

                </form>
            </div>
        </div>
    )

}

export default SignInPage