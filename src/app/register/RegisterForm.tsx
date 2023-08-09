import * as React from 'react';

export interface ILoginFormProps {
}

export default function LoginForm (props: ILoginFormProps) {
  return (
    <div className='h-screen flex items-center justify-center bg-transparent'>
    <form className='p-5 m-1 shadow-xl flex flex-col gap-3 border rounded-md bg-slate-100/40 '>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' placeholder='Enter Your Name'  className='p-2 rounded focus:outline-b'/>
      <label htmlFor="email">Email</label>
      <input type="email" id='email' placeholder='Enter Your Email'  className='p-2 rounded'/>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' placeholder='Enter Your password'  className='p-2 rounded'/>
    <button type='submit' className='bg-slate-100/40 rounded p-2 hover:bg-slate-100/20 hover:scale-110 transition-all ease-in hover:border-t-2 hover:border-b-2 border-white'>Register</button>
    </form>
    </div>
  );
}
