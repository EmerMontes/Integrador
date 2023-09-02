//import Card from './components/Card.jsx';
//import SearchBar from './components/SearchBar.jsx';
//import characters, { Rick } from './data.js';
//import ErrorPage from "./views/ErrorPage.jsx";
//import Login from "./views/Login.jsx";
import { useState, useEffect } from 'react';
import { Route , Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import Cards from './components/Cards.jsx';
import Nav  from './components/Nav';

import Detail from "./view/Detail.jsx";
import About from "./view/About.jsx";
import ErrorPage from './view/ErrorPage';
import Form from './view/Form'

const userName = 'emermontes15@gmail.com'
const password = 'Emerson15.'

function App() {

 const navigate = useNavigate();
 const [characters,setCharacters] = useState([])
 const [memoria, setMemoria] = useState([]);
 const [access, setAccess] = useState(false);
 
 
 const onSearch = (id)=>{
    if(id>826||id<1) {
      alert('¡No hay personajes con este ID!')
   }
   if(memoria.includes(id)){
       alert('Personaje ya ingresado')
      }else{
        axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-emermontes`).then(({data})=>{
        setCharacters((oldChars) => [...oldChars, data])})
      }
    setMemoria([...memoria, id]);

   }

   
   const onClose =(id)=>{
     const charactersFiltred = characters.filter(character => character.id !== Number(id))
     setCharacters(charactersFiltred);
   }

   function randomHandler() {
      let randomId = (Math.random() * 826).toFixed();
      randomId = Number(randomId);
      onSearch(randomId);
   }

   const login=(userData)=>{
      if(userData.userName === userName && userData.password=== password) { 
         setAccess(true)
         navigate('/home')
      }   
   }

   const logOut=()=>{
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      
      <div className='App'>
          <Nav logOut={logOut} onSearch={onSearch} randomHandler={randomHandler}/>
         <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<ErrorPage/>} />
         </Routes> 
      </div>
      
   );
}

export default App;
