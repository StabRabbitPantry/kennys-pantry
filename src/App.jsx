import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { increment, decrement } from './reducers/counterSlice';

import './App.css';

import IngredientsContainer from './containers/IngredientsContainer.jsx';
import Navbar from './Components/Navbar.jsx';
import Logo from './Components/Logo.jsx';
import RecipeContainer from './Components/RecipeContainer.jsx';
import Login from './Components/Login.jsx';
import Home from  './Components/Home.jsx';
import Favourites from "./Components/Favourites.jsx"

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
          <Routes>
            <Route exact path="/" element={<Login /> }/>
            <Route exact path="/home" element={<Home />}/>
            <Route exact path="/login" element={ <Login /> }/>
            <Route exact path="/signin" element={ <Login /> }/>
            <Route exact path="/favourites" element={< Favourites/>} />
          </Routes>
  );
}

export default App;
