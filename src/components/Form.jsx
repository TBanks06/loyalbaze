import { useState } from "react"
import React  from 'react'

const Form = () => {
  return (
    <form className='rounded-3xl  w-4/12 h-6/12 bg-slate-900 p-12'>
        <div className="mx-auto">
            <div>
                <h1 className='font-satoshi text-white text-2xl mb-3 '>Book a Consultation with us</h1>
            </div>
            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none "
                type="text" 
                name="" 
                placeholder='Enter your full name'
                required
             />
                <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="" 
                placeholder='Enter your work email' 
                required
            />
            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="" 
                placeholder='Mobile number'
                required 
            />
            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="" 
                placeholder='Company Name' 
                required
            />
            <br />
            <select 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                name="" 
                id=""
                >
                <option 
                        className="text-white placeholder:font-italic"
                        value="algeria">
                        Algeria
                    </option>
                    <option 
                        className="placeholder:font-italic"
                        value="benin">
                        Benin
                    </option>
                    <option
                        className="placeholder:font-italic" 
                        value="canada">
                        Canada
                    </option>
                    <option
                        className="placeholder:font-italic" 
                        value="nigeria">
                        Nigeria
                    </option>
            </select>
            <textarea 
                className="w-64 resize-none mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                name=""  
                cols="12" 
                rows="4" 
                placeholder="Drop a message....."
                required
                />
                <br />
            <button 
                type="submit"
                className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 px-16 py-2 rounded-full mb-4"
                >
                Send Request
            </button>
        </div>
        
    </form>
  )
}

export default Form