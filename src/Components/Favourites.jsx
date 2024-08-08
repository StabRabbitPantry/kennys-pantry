import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';
import { useSelector, useDispatch } from 'react-redux';

const Favourites = () => {
  const [ userFavourites, setUserFavourites ] = useState([]);
  const user = useSelector((state) => state.user)
  const id = user._id;

  const getUserData = async (id) => {
    try {
      const response = await fetch(`api/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.ok) {
        const data = await response.json();
        setUserFavourites(data.favourites)
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  // console.log(userFavourites, 'this is user favourite list');
  useEffect(() => {
    getUserData(id)
  }, [id]);
  
  return (
    <div
    className='container mx-auto p-4 border-4 border-green rounded-lg bg-opacity-50 shadow-xl'
      style={{
        position: 'relative',
        top: '250px',
        minWidth: '900px',
        left: '100px',
      }}
    >
       
            <h1 className='text-7xl font-bold mb-4 text-center text-dark-maroon font-playfair-display'>
            My Favorite Recipes
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 gap-4'>
                
                {userFavourites.map((fav, index) => {
                  return (<div key={index} className='max-w-xs rounded overflow-hidden shadow-lg flex flex-col bg-green hover:bg-light-green scale-100 h-500px hover:scale-105'>
                    <h1 className='text-dark-maroon text-2xl font-bowlby-one dynamic-text'>{fav.recipe}</h1>
                    <img src={fav.image} alt="food-image" className='w-11/12 h-48 my-2 object-cover mx-auto rounded shadow-lg'/>
                    <h5 className='w-30 text-dark-maroon font-bowlby-one break-words'>{fav.recipeUrl}</h5>
                    <p className='text-darker-maroon font-reenie-beanie text-xl font-bold'>{fav.ingredients}</p>
                  </div>)
                })
                }
            </div>
        </div>

  )
}

export default Favourites;