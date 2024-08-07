import KennysLogo from '../assets/Kennys_Logo.png';
import React from 'react';

const Logo = () => {
  return (
    <div className='flex items-start justify-center min-h-screen p-8 flex-center'>
      <div
        className='border-2 border-green p-4 rounded-lg bg-cream w-60 h-20 flex items-center justify-center'
        style={{ marginTop: '60px', marginBottom: '60px' }}
      >
        <img src={KennysLogo} alt='KennysLogo' />
        {/* <span className='text-brown text-2xl font-bold'>Logo</span> */}
      </div>
    </div>
  );
};

export default Logo;
