
import { useState, useEffect } from 'react';
import { Route , Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch} from "react-redux";
import {removeFav, resetFav} from './redux/actions'



import './App.css';

import Cards from './components/Cards.jsx';
import Nav  from './components/Nav';

import Detail from "./view/Detail.jsx";
import About from "./view/About.jsx";
import ErrorPage from './view/ErrorPage';
import Form from './view/Form'
import Favorites from './view/Favorites'

//const userName = 'emermontes15@gmail.com'
//const password = 'Emerson15.'

function App() {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [characters,setCharacters] = useState([])
 const [memoria, setMemoria] = useState([]);
 const [access, setAccess] = useState(false);
 
 
 
 
   const onSearch = (id)=>{
      if(id>826||id<1) {
        return alert('¡No hay personajes con este ID!');
      }
      if(memoria.includes(id)){
       return alert('Personaje ya ingresado');
      }else{
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data})=>{
        setCharacters((oldChars) => [...oldChars, data])})
        setMemoria([...memoria, id]);
      }
   }

   
   const onClose =(id)=>{
     const charactersFiltred = characters.filter(character => character.id !== id)
     setCharacters(charactersFiltred);
     setMemoria([])
     dispatch(removeFav(id))
   }

   function randomHandler() {
      let randomId = (Math.random() * 826).toFixed();
      randomId = Number(randomId);
      onSearch(randomId);
   }

   const login=(userData)=>{
      // if(userData.userName === userName && userData.password=== password) { 
      //    setAccess(true)
      //    navigate('/home')
      // }   
      const { userName, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
        axios(URL + `?email=${userName}&password=${password}`).then(({ data }) => {
        const { access } = data;
        setAccess(data);
       access && navigate('/home');
      });
     onSearch(1);
     onSearch(2);
     onSearch(3);
     onSearch(4);
     onSearch(5);
   }
   
   const logOut=()=>{
      if(characters.length>=1){
      if (window.confirm('¿Estás seguro de que deseas salir? Perderás todos tus personajes incluidos los favoritos.')) {
      setCharacters([])
      dispatch(resetFav())
      navigate('/')
      }else{
         navigate('/home')
      }
    }else{
      navigate('/')
    }
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
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<ErrorPage/>} />
         </Routes> 
      </div>
      
   );
}

export default App;
