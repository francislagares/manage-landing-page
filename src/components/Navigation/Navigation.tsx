import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Button } from 'components';

const Navigation = () => {
  return (
    /** Navbar */
    <nav className='relative container mx-auto p-6'>
      {/** Flex Container */}
      <div className='flex items-center justify-between'>
        {/** Logo */}
        <figure className='pt-2'>
          <img src={logo} alt='' />
        </figure>
        {/** Menu Items */}
        <div className='hidden md:flex space-x-6'>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='/' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        {/** Button */}
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};

export default Navigation;
