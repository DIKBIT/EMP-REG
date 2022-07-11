import React, { useEffect } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
// import notes, {} from '../../data/notes'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNoteAction, listNotes } from '../../actions/notesAction'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'



const MyNotes = ({search}) => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();

  const noteList = useSelector(state => state.noteList)
  const {loading, notes, error} = noteList;

   const userLogin = useSelector(state => state.userLogin)
   const {userInfo } = userLogin


   const noteCreate = useSelector((state) => state.noteCreate);
  const { success : successCreate } = noteCreate;


  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success : successUpdate } = noteUpdate;

   const noteDelete = useSelector (state => state.noteDelete)
   const {loading : loadingDelete, error : errorDelete, success : successDelete} = noteDelete

    // const [notes, setNotes] = useState ([]);
    const deleteHandler = (id) => {
        if(window.confirm("Are you sure?")) {
          dispatch(deleteNoteAction(id))

        }
    };

    // const fetchNotes = async() =>{
    //    const {data} = await axios.get('/api/notes');
    //    setNotes( data) 
    // }

    console.log(notes)

    useEffect (() => {
      dispatch (listNotes())
      if (!userInfo){
        navigate('/')

      }
       
        

    }, [navigate, userInfo, successCreate, dispatch, successUpdate, successDelete]);



  return (
    <MainScreen title={`Welcome ${userInfo.name}...`}>
    <Link to={'/createnote'}>
    <Button style={{marginLeft:10, marginBottom: 6}} size="lg">
    Create New Note
    

    </Button>
    </Link>
    {errorDelete && (
      <ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>
    )}
    {loadingDelete && <Loading/>}
    {error && <ErrorMessage variant='danger'>{error} </ErrorMessage>}
    {loading && <Loading/>}
    {
        notes?.reverse().filter((filteredNote)=>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())

        ).map(note =>(

        <Accordion defaultActiveKey={0} key={note._}>
        <Card style={{margin:10}}>
        <Card.Header style={{display:"flex"}}>
        <span 
        style={{
        color:"black",
        textDecoration:"none",
        flex : 1,
        cursor : "pointer",
        alignSelf:"center",
        fontSize:18,
    }}>
    <Accordion.Item eventKey='0'></Accordion.Item>
    <Accordion.Header>{note.title}</Accordion.Header></span>

    <div>
    <Button href={`/note/${note._id}`}>Edit</Button>
    <Button variant='outline-danger' className='mx-2'
    onClick={()=> deleteHandler(note._id)}>Delete</Button>

    </div>

    </Card.Header>
    <Accordion.Body eventKey='0'>
    <Card.Body>

    <h4>
        <Badge bg='success'> Category - {note.category}</Badge>
    </h4>
        <blockquote className="blockquote mb-0">
        <p>
        {note.content}
        </p>
      <footer className="blockquote-footer">
        Created on {" "}
        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
      </footer>
    </blockquote>

    </Card.Body>
    </Accordion.Body>
    

    </Card>
    </Accordion>

        ))}
    

    
    
    
    
    
    
    
    
    </MainScreen>
  )
}

export default MyNotes













































































































































