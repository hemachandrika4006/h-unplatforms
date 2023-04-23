import './Form1.css';
import  Form2 from './Form2';
import Displaytime from  './Displaytime';
import { useForm } from 'react-hook-form';

function Form1()
{
    
  let {register,handleSubmit,formState:{errors}}=useForm();
  let submitForm=(userObj)=>{
  

    fetch("http://localhost:4000/users",{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(userObj)
  })
  .then(res=>res.json())
  .then(message=>console.log(message))
  .catch(err=>console.log("err is",err))
};
  return (
   
    <div className="container">
   <div className="row mx-auto"> 
    <div className="col-11 col-sm-8 col-md-10 mx-auto">

        <form onSubmit={handleSubmit(submitForm)}>
        <div className='f1'>
            <input  type="text"  id="username" className="form-control  f2" 
            placeholder="What are you working on?"{...register("username")}/> 
            <div className='f3'>
           <Displaytime/>
            </div>
          <button type="submit" className="btn btn-primary ">Add</button>

            </div>
        </form>
        <Form2/>
    </div>
   </div>
    </div>
    
  );
}
export default Form1;