
import React, { useState } from 'react';
import { BrowserRouter as   Router , Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateNote from './screens/CreateNote/CreateNote';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MyNotes from './screens/MyNotes/MyNotes';
// import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import SingleNote from './screens/SingleNote/SingleNote';

function App() {

  const [ search, setSearch] = useState("")
  
  return (
    
    <div>
    
    <Router>
    <Header setSearch = {setSearch}/>
    <Routes>
    <Route exact path='/' element={<LandingPage/> }/>
    <Route exact path='/login' element={<LoginScreen/> }/>
     
    <Route exact path='/register' element={<RegisterScreen/> }/>
    <Route exact path='/createnote' element={<CreateNote/> }/>
    <Route exact path='/note/:id' element={<SingleNote/> }/>
    <Route exact path='/mynotes' element={<MyNotes search = {search}/> }/>
    </Routes>
    </Router>
    

   
    

    
    <Footer/>
     </div>

    
  );
}

export default App;
