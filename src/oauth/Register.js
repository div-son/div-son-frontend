import React from 'react'
import{ AiOutlineUser } from 'react-icons/ai'

export const Register = () => {
  return (
    <div className='container'>

        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Register</h2>
                <p className='welcome'>Welcome!</p>
            </div>

            <form className='form-wrapper'>
                <div className='firstname'>
                    <label className='label' >First name </label>
                    <input 
                    placeholder='Enter first name'
                    className='input'
                    type='text'
                    name='firstname'
                    />
               
                </div>

                <div className='lastname'>
                    <label className='label' >Last name</label>
                    <input 
                    placeholder='Enter last name'
                    className='input'
                    type='text'
                    name='lastname'
                    />
                </div>

                <div className='phonenumber'>
                    <label className='label' >Phone number</label>
                    <input 
                    placeholder='Enter phone number'
                    className='input'
                    type='tel'
                    name='phonenumber'
                    />
                </div>

                <div className='email'>
                    <label className='label'>Email</label>
                    <input 
                    placeholder='Enter email address'
                    className='input'
                    type='email'
                    name='email'
                    />
                </div>

                <div className='password'>
                    <label className='label' >Password</label>
                    <input 
                    placeholder='Enter password'
                    className='input'
                    type='text'
                    name='password'
                    />
                </div>

            </form>
        </div>
    </div>
  )
}

export default Register;