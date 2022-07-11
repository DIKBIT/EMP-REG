import React, { useEffect } from 'react'
import { Button, Container, Row} from 'react-bootstrap'
import "./LandingPage.css"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() =>{
    const userInfo = localStorage.getItem("userInfo")

    if(userInfo){
      navigate('/mynotes')
    }
  },[navigate])
  return (
    
    <div className='main'>
    <Container>
    
    <Row>
        <div className='intro-text'>
        <div>
        <h1 className='title'> Welcome to TOOLS CRIB MANGEMENT</h1>
        <p className='subtitle'> One place for all management of the tools</p>

        </div>

        <div className='buttonContainer'>
        <a href='/login'>
          <Button size='lg' className='landingbutton'>
            Login
          </Button>
        </a>

        <a href='/register'>
          <Button size='lg' className='landingbutton' variant='outline-primary'>
            Register
          </Button>
        </a>

        </div>

        </div>
    </Row>

    </Container>


    </div>
    
  )
}

export default LandingPage