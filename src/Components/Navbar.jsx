import react from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const user = useSelector((state) => state.user);
  const id = user._id;

  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate('/login');
  }
  const goToFavourites = () => {
    navigate(`/favourites`);
  }

  return (
    <div className='fixed top-0 left-0 h-10 w-screen m-0 flex flex-row justify-between px-4 py-1 space-x-3 bg-green shadow-lg text-cream'>
      <a
        
        className='text-xl hover:underline hover:text-cream text-cream'
      >
        Home
      </a>
      <span className='text-xl' onClick={goToFavourites}>Favorites</span>
      {/* <span className='text-xl'>Login</span> */}
      <a
        
        className='text-xl hover:underline hover:text-cream text-cream'
      >
        <button onClick={ goToLogin }>Login</button>
      </a>
    </div>
  );
};

export default Navbar;
