import React from 'react';


const Loader = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div>
        <div className='w-64'>
          <img src="/img/logo.png" alt="Loading..." />
          <div className="pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;