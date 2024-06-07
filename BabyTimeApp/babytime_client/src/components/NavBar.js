import {NavLink} from 'react-router-dom';
import { Baby, Session } from '../requests';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {GiBabyFace} from 'react-icons/gi'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../401.jpg'
import React, {useState, useEffect} from "react"

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(()=> {
            onSignOut()
            
        })
    }
    const [baby, setBaby] = useState({})
    useEffect(() => {
      Baby.index()
      .then(baby =>{
        setBaby(baby)
      })
    
      
    }, [])
    
    
    return(
        <Navbar>


            <Container class="justify-content-center">
                
            <Navbar.Brand href="/">
            {/* <GiBabyFace
             size={50}
             className="navList"
            />{' '} */}
            <img src={logo} width="50" height="50" style={{borderRadius:"50%"}}></img>
            <span> BABYTIME </span>
          </Navbar.Brand>
      
         
          <Navbar.Brand> 
            <NavLink className="navList" to='/'>Home</NavLink>
            
            {
                currentUser ? (
                    <>
                   
                    <NavLink className="navList" to='/activities'>Activity</NavLink>
                    <NavLink className="navList" to='/baby'> My Baby</NavLink>
                    
            
                    <span> Welcome, { currentUser.first_name + " " + currentUser.last_name} </span>
                    
                    <Button variant="light" onClick={handleSignOut}> Sign Out</Button>{' '}
                    
                   
                    </>
                    
                ) : (
                    <>
                    <NavLink className="navList" to='/sign_in'> Sign In </NavLink>
                    
                    <NavLink  className="navList" to='/sign_up'> Sign Up </NavLink>
                    </>
                )
            }
            
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;


