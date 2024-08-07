import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import IngredientsContainer from '../containers/IngredientsContainer.jsx';
import Navbar from './Navbar.jsx';
import Logo from './Logo.jsx';
import RecipeContainer from './RecipeContainer.jsx';
import Login from './Login.jsx';

const Home = () => {
return (
    <>
      <div className='flex'>
    <Navbar />
    <Logo />
    <RecipeContainer />
    <IngredientsContainer />
    </div>
    </>
)
}
export default Home;