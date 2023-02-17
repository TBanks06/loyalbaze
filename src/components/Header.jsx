import React from 'react'
import Logo from '../images/logo-loyalblaze.png'

const Header = () => {
  return (
    <header className='flex flex-row justify-around align-middle h-16 '>
        <div>
            <img className='w-4' src={Logo} alt="logo" />
        </div>
        <div>
            <button className='bg-transparent' type='submit'>Get Priority Access</button>
        </div>
    </header>
  )
}

export default Header