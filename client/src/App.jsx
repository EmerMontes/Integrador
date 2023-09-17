import { useState, useEffect } from 'react';
import { Route , Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';
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
 const [memoria, setMemoria] = useState([]);
 const [access, setAccess] = useState(false);
 const [characters,setCharacters] = useState([]);
 //console.log(memoria)
   const onSearch = async (id)=>{
      if(id>826||id<1) {
         return swal('¡There is no character with that ID!','','error');
      }
      if(memoria.includes(id)){
         return swal('You already added that character','','error');
      }
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data])
      } catch (error) {
         alert(error.message)
      }
      setMemoria([...memoria, id]);                    
   }
   
   const onClose =(id)=>{
     const charactersFiltred = characters.filter(character => character.id !== id)
     setCharacters(charactersFiltred);
     const idFiltred = memoria.filter(ids => ids !== id.toString())
     setMemoria(idFiltred)
     dispatch(removeFav(id))
   }

   function randomHandler() {
      let randomId = (Math.random() * 826).toFixed();
      //randomId = Number(randomId);
      onSearch(randomId);
   }

   const login= async(userData)=>{
      const { userName, password } = userData;
      if (userName.length===0 ||password.length===0) {
          return swal('Empty field','','error')
      }
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${userName}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
         let num = 0;
         while (num<5) {
            num++
            randomHandler()
         } 
      } catch (error) {
        swal('Incorrect information','','error')
      }
      
   }
   
   const logOut=()=>{
      if(characters.length>=1){
         swal({
            title: "Are you sure?",
            text: "You will lose all your characters, even your favorites!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
               setCharacters([])
               dispatch(resetFav())
                navigate('/')
            }
             else {
               navigate('/home')
            }
          });
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
