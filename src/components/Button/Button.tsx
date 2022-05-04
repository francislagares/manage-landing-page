import React from 'react';

interface Iprops {
  children: React.ReactNode;
}

const Button = ({ children }: Iprops) => {
  return (
    <button className='hidden md:block p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
      {children}
    </button>
  );
};

export default Button;
