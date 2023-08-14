"use client"
import axios from 'axios';
import  React,{ChangeEvent,FormEvent,Fragment,useState} from 'react';
import { string,object,email,minLength,parse,type Output,flatten,ValiError } from 'valibot';
import { RegisterSchema } from '@/validations/RegisterSchema';

export interface ILoginFormProps {
}

export default function LoginForm (props: ILoginFormProps) {
  // Create login schema with email and password
/* const RegisterSchema = object({
  name: string([minLength(3,'Length must be greater than 3')]),
  email: string([email(),minLength(5,'Length must be greater than 5')]),
  password: string([minLength(8,'Length must be greater than 8')]),
}); */
type RegisterData = Output<typeof RegisterSchema>;
  const [errorList,setErrorList] = useState<any>({
    

  });
  
  const [formData,setFormData] = useState({
    name:"test",
    email:"test@gmail.com",
    password:"test",

  })
  /* console.log(parse(RegisterSchema,formData)) */
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      const {name,value} = e.target;
      setFormData((prev)=>({...prev,[name]:value}))
    /*   setFormData((prev)=>({...prev,{[name]:value}})) */
  }
  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      //RegisterSchema.parse(formData)
      const response = await axios.post("/api/register",formData)
      console.log(response.data)
    } catch (error:any) {
      console.log(error)
      if (error instanceof ValiError || (error.response && error.response.status === 400)) {
        if(error.response && error.response.status === 400){
          console.log(error.response.data.error)
          const err = error.response.data.error;
          setErrorList({...err}) 
          
        } else{
          const err = flatten(error).nested;
          setErrorList({...err})
        } 
        
        console.log(errorList)
        
      }
      
    }
   
  }
  return (
    <div className='h-screen flex items-center justify-center bg-transparent'>
    <form onSubmit={handleSubmit} className='p-5 m-1 shadow-xl flex flex-col gap-3 border rounded-md bg-slate-100/40 '>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' placeholder='Enter Your Name'
      value={formData.name}
      className='p-2 rounded focus:outline-b'
      onChange={handleChange}
      />
      {errorList?.name && <span className='text-rose-400'>{errorList.name.map((errorMsg:string,index:number)=>
        <Fragment key={index}>
         {index != 0 ? "," : "" } {errorMsg} 
        </Fragment>
      )}</span>} 
      
      <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' placeholder='Enter Your Email'
      value={formData.email}
        className='p-2 rounded'
        onChange={handleChange}
        />
        {errorList?.email && <span className='text-rose-400'>{errorList.email.map((errorMsg:string,index:number)=>
        <Fragment key={index}>
         {index != 0 ? "," : "" } {errorMsg} 
        </Fragment>
      )}</span>} 

      <label htmlFor="password">Password</label>
      <input type="password" id='password'  name='password' placeholder='Enter Your password'
      value={formData.password}
      className='p-2 rounded'
      onChange={handleChange}
      />
        {errorList?.password && <span className='text-rose-400'>{errorList.password.map((errorMsg:string,index:number)=>
        <Fragment key={index}>
         {index != 0 ? "," : "" } {errorMsg} 
        </Fragment>
      )}</span>} 
    <button type='submit' 
    className='bg-slate-100/40 rounded p-2 hover:bg-slate-100/20 hover:scale-110 transition-all ease-in
     hover:border-t-2 hover:border-b-2 border-white'
     >
      Register
      </button>
    </form>
    </div>
  );
}
