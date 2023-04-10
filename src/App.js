import './App.css';
import { useState } from 'react';




function App() {
  //creating a list of object
  const items=[{
    Select:"Select",
    yes:"yes",
    No:"probaly No"
  }]
  //using setstate hooks
  const [name, setName] = useState('');
  //handling the click event
 const Handleitem=(e)=>{
  setName(e.target.value)
 }
 
  return (
    <div className="App">
         <div className="dropDown">  
         <h1>Should we Use DropDown?</h1>
         <div  className='dropdown-Container'>
         <select value={name}onChange={Handleitem}>
         
          {items.map((item)=>{
               return <><option>{item.Select}</option>
               <option>{item.yes}</option>
               <option>{item.No}</option>
               </>
          })}
          
          
         </select>
         </div>
         <div className='item'>
         <h1>{name}</h1>
         </div>
         </div>
    </div>
  );
}

export default App;
