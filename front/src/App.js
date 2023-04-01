import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import Nav from "../src/components/Nav/Nav.jsx"
//import characters, { Rick } from './data.js'
import { useState, useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites'

function App () {
  //Estado de characters
  const [characters, setCharacters] = useState([]);
  
  const onClose = (id) =>{
    //fliter retorna una array nuevo 
    setCharacters(characters.filter(elemArr => elemArr.id !== id));
  }
  

  
  const onSearch = (id) =>{
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const key = "d66ed9e3539f.e190f2682879ad1a64d3";

    if(characters.find((char)=> char.id === id)){
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${key}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  //location
  const location = useLocation();
  //navigate
  const navigate = useNavigate();
  //Simulación de seguridad
  const [access, setAccess] = useState(false);
  const username = 'nuala.ni.ale@gmail.com';
  const password = 'qwerty123';

  const login = (userData) => {
    if((userData.username === username) && (userData.password === password)){
      setAccess(true);
      navigate('/home')
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  
  return (
    <div className='App' style={{ padding: '25px'}}>
      
      <div className='divNav'>
        {
          location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />
        }
      </div>
      
      <Routes>
      
        <Route 
          path="/home" 
          element={<Cards
            characters={characters}
            onClose={onClose}/>}
          />

        <Route path='/about' element={ <About/> }/>
        <Route path='/detail/:detailId' element={ <Detail/> } />
        <Route path=':error' element={ <Error/> }/>
        <Route path='/favorites' element={ <Favorites/> }/>
        
      </Routes>
      {/* <div className='divCards'>
        <Cards
          characters={characters}
          onClose={onClose}
        /> 
      </div> */}
      
      
    </div>
  )
}

export default App
