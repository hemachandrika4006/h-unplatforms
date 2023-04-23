import './Form2.css';
import { useEffect,useState } from 'react';
function Form2(props){
let [usersdata,setUserdata]=useState([]);
useEffect(()=>{
   fetch("http://localhost:4000/users")
   .then(res=>res.json())
   .then(usersdata=>setUserdata(usersdata))
   .catch(err=>console.log("error is",err))
},[usersdata]);
return(
    <div>
       <h6 className='s mt-5 '>This Week</h6>
    <table className='table table-responsive table-bordered mt-3'>
        <thead className='bordered'>
            <th className=' k pt-3 ps-3 ' >Today</th>
        </thead>
        <tbody>
            {usersdata.map((userObj)=>
            <tr>
                <td>{userObj.username}</td>
                
            </tr>
            
            )}
        </tbody>
    </table>
    
    </div>
)
}
export default Form2;