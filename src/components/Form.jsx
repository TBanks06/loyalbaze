import { useState } from "react"
import React  from 'react'
import validator from 'validator'

const Form = () => {
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [fulnError, setFulnError] = useState("")
    const [countryError, setCountryError] = useState("")
    const [compError, setCompError] = useState("")
    const [mesgError, setMesgError] = useState("")

    const validateFormData  = (e) => {
    var email = e.target.value
   
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const validateCompData  = (e) => {
    var cname = e.target.value
  
    if (validator.isEmail(cname)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  return (
    <form className='rounded-3xl  w-4/12 h-6/12 bg-slate-700 p-12' >
        <div className="mx-auto">
            <div>
                <h1 className='font-satoshi text-white text-xl mb-3 '>Book a Consultation with us</h1>
            </div>

            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none "
                type="text" 
                name="fullname" 
                placeholder='Enter your full name'
                required
             /><span>{fulnError}</span>
                <br />

            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="email" 
                placeholder='Enter your work email' 
                required
                onChange={(e) => validateFormData(e)}
            /> <span>{emailError}</span>
            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="mnumb" 
                placeholder='Mobile number'
                required 

            /><span>{phoneError}</span>
            <br />
            <input 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                type="text" 
                name="cname" 
                placeholder='Company Name' 
                required
                onChange={(e) => validateCompData(e)}
            />
            <br />
            <select 
                className="w-64 mb-4 bg-transparent placeholder:font-italic border border-slate-300 rounded py-2 pl-3 pr-5 focus:outline-none"
                name="country" 
               
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
                <span>{mesgError}</span>
                <br />
            <button 
                onSubmit={validateFormData}
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