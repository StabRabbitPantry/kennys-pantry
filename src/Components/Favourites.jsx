import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';
import FullRecipe from './FullRecipe';
import { useSelector, useDispatch } from 'react-redux';

const Favourites = () => {
  const [ userFavourites, setUserFavourites ] = useState([]);
  const user = useSelector((state) => state.user)
  // console.log(user);
  const id = user._id;
  console.log(id, 'userID in favourites');
  const favourites = user.favourites;
  // console.log(favourites);
  let renderCards;

// useEffect(()=> {
// //assume user has favorites arr
// //if user and written state of userfavorites true
// fetch(`/api/users/${id}`)
// .then(res => {
//   console.log(res, 'res');
//   console.log(user.favourites)
// })
// .catch(err => {
//     console.log(err);
// });

// },[]);
  const getUserData = async (id) => {
    try {
      const response = await fetch(`api/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (response.ok) {
        const data = await response.json();
        renderCards = data.favourites;
        setUserFavourites((currentArr) => {
          const cards = [];
          for (let card of renderCards) {
            console.log(card);
            cards.push(<RecipeCard {...card} />);
          }
          return cards;
        })
        console.log(userFavourites);
        setUserFavourites(data.favourites)
      }
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className='flex flex-col items-center align-middle h-full p-4'> 
            <h1 className='text-7xl font-bold mb-4 text-center text-dark-maroon font-playfair-display'>
            My Favorite Recipes
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 gap-4'>
                {userFavourites.map((favourite,index)=> (
                    <RecipeCard
                     key={index} 
                    recipeName={favourite.recipe}
                        ingredients={favourite.capitalized}
                        imageLink={favourite.image}
                        url={favourite.receipeUrl}
                        clickHandler={()=> console.log(favourite)}
                    />
                )
                )}
                {userFavourites} 
            </div>
        </div>

    </div>
  )
}

export default Favourites;