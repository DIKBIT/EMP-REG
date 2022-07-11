// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form , Col, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/userActions'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'
import "./LoginScreen.css"
import { useNavigate } from 'react-router-dom';

// import MyNotes from '../MyNotes/MyNotes'



const LoginScreen = ({navigate}) => {

  navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const {loading, error, userInfo} = userLogin

    useEffect(() =>{
      if(userInfo) {

        
        navigate('/mynotes');
      }
    }, [navigate, userInfo])


    

    const submitHandler =  async(e)=>{
        e.preventDefault();

        dispatch(login(email, password));





        // console.log(email,password )
        
        // try {
        //     const config={
        //         headers :{
        //             "Content-type" :"application/json"
        //         }
        //     }

        //     setLoading(true)


        //     const {data} = await axios.post('/api/users/login',
        //     {
        //         email, password,
        //     }, config
        //     );

        //     console.log(data);
        //     setLoading(false) ;       
            
        //     localStorage.setItem("userInfo", JSON.stringify(data));
            
        // } catch (error) {
        //     setError(error.response.data.message); setLoading(false) ;
            
        // }
    };


  return (
    <MainScreen title="LOGIN">
    <div className='loginContainer'>
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
    
    
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value ={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value ={password} placeholder="Enter your Password"   onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>


    <Button variant="primary" type="submit">
        Submit
      </Button>

    

    </Form>
    <Row className="py-3">
    <Col>
        New Employee ? <Link to ="/register"> Register Here</Link>
    </Col>

    </Row>

    </div>







    </MainScreen>
  )
}

export default LoginScreen