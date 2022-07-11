// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'
import "./RegisterScreen.css"

const RegisterScreen = ({navigate}) => {

    navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)


    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, userInfo} = userRegister


    useEffect(() =>{
        if(userInfo) {
  
          
          navigate('/mynotes');
        }
      }, [navigate, userInfo])



    const submitHandler = async(e)=>{
        e.preventDefault();

        if(password !== confirmpassword){
            setMessage('Passwords do not match')
        }else{
            dispatch(register(name, email, password))
        }









        // if (password!== confirmpassword){
        //     setMessage("Passwords do not match");
        // }else{
        //     // setMessage(null)
        //     try {
        //         const config={
        //         headers :{
        //             "Content-type" :"application/json"
        //         }
        //     }
        //      setLoading(true);


        //      const {data} = await axios.post('/api/users/register',
        //     {
        //         email, password, name
        //     }, config
        //     );

        //     // console.log(data);

        //     setLoading(false) ;
        //     localStorage.setItem("userInfo", JSON.stringify(data));
                
        //     } catch (error) {
        //         setError(error.response.data.message); setLoading(false) ;
                
        //     }


        // }
        console.log(email)

    }

    
  return (
    <MainScreen title ="REGISTER">
        <div className="loginContainer">
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
        {loading && <Loading/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
        <Form.Label> Name</Form.Label>
        <Form.Control
        type='name'
        value ={name}
        placeholder='Enter your name'
        onChange ={(e)=> setName(e.target.value)}
        >

        </Form.Control>
            
        </Form.Group>



        <Form.Group controlId='formBasicEmail'>
        <Form.Label> Email Address</Form.Label>
        <Form.Control
        type='email'
        value ={email}
        placeholder='Enter your Email'
        onChange ={(e)=> setEmail(e.target.value)}
        >

        </Form.Control>
            
        </Form.Group>


        <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
        type='password'
        value ={password}
        placeholder='Enter your Password'
        onChange ={(e)=> setPassword(e.target.value)}
        >

        </Form.Control>
            
        </Form.Group>


        <Form.Group controlId='confirmPassword'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
        type='password'
        value ={confirmpassword}
        placeholder='Confirm Password'
        onChange ={(e)=> setConfirmPassword(e.target.value)}
        >

        </Form.Control>
            
        </Form.Group>


        <Button variant="primary" type="submit">
        Register
      </Button>

        </Form>


        <Row className="py-3">
    <Col>
        Already have an account ? <Link to ="/login">Login Here</Link>
    </Col>

    </Row>


        

        </div>
    </MainScreen>
  )
}

export default RegisterScreen