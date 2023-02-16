import React from 'react'
import Goum from '../images/goum.png'
// import '../styles/HeroSection.css'
import Shape from '../images/Ellipse-.png'
import Shape2 from '../images/under-logo.png'
import Smcircle from '../images/Ellipse-.png'
import smStar from '../images/bg-star.png'
import Arrow from '../images/arrow-vector.png'

const HeroSection = () => {
  return (
    <div className='mx-auto ' >
      <div className='mb-8 '>

        <h1 className=' text-center font-normal text-5xl w-full mb-8 mt-10' >Turn your best customers  <br /> into <span className=' text-indigo-800'>Loyal fans</span> </h1>
        <p className=' text-center align-middle font-normal text-xl w-6/12 px-8 leading-6 ml-76 mx-auto'>Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
        <img className='w-48 absolute top-4 right-3.5'  src={Shape} alt="shapes" />
        <img className='absolute w-20 top-4.5 inset-x-2/3' src={Arrow} alt="arrow" />
        <img className='absolute w-34 top-20 left-24' src={Shape2} alt="shape" />
        <img className='absolute w-6 top-3 inset-x-1/3 ' src={smStar} alt="star" />
      </div>
        <form className='text-center '>
          <div className='relative block'>

            <i class="fa fa-user icon"></i>
            <input class="w-64 bg-white placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none" type="text" placeholder='Tell us your name' required/>
          </div>
              <br />
              <div className=''>

            <i class="fa-thin fa-envelope icon"></i>
            <input class="w-64 bg-white placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none" type="text" placeholder='Enter your email address' required/>
              </div>
            <br />
            <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 rounded-full' type='submit'>Get early access</button>

                <div className=' text-center mx-auto align-middle flex flex-row justify-center gap-4 space-x-1 w-24'>
                    <img className='p-2' src={Goum} alt="goum " />
                    <p className='w-16'>+57 Joined</p>
                </div>
        </form>
    </div>
  )
}

export default HeroSection