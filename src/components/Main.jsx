import React from 'react'
import Form from '../components/Form'
import Scribble from '../images/scribble.png'

const Main = () => {
  return (
    <div className='flex flex-row justify-around mx-auto  bg-slate-900 p-12 '>
        <div className='h-96 w-64 relative bottom-26 left-30'>
            <div className='flex-col justify-center align-middle w-40 '>
                <h2 className='font-satoshi text-2xl text-left text-white'>Priority Access</h2>
                <img 
                    src={Scribble} 
                    alt="shape" 
                    className='w-16 h-14 mb-2 '
                    />
            
            </div>
            <div className='w-'>
                <p className='font-satoshi text-white text-sm  text-left'>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</p>

            </div>
        </div>
    <Form />
    </div>
  )
}

export default Main