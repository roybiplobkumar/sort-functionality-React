
import { useState } from 'react'
import './App.css'

function App() {
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 28 }
  ];
  const [sort, setSort] = useState(data);

 const handleSort=(e)=>{
  const value=e.target.value 
  if(value=="age"){
    const sortAge=[...sort].sort((a,b)=> a.age>b.age?1:-1)
    setSort(sortAge)
  }
  if(value=="name"){
    const sortName=[...sort].sort((a,b)=> a.name > b.name ? 1:-1)
    setSort(sortName)
  }
  
 if(value==""){
  setSort(data)
 }
 }

  return (
    <>
        <form >
          <select onChange={handleSort} name="" id="">
            <option value="">selet sort</option>
            <option  value="age"> sort by age 
            </option>
            <option  value="name"> sort by name
            </option>
            
    </select>
        </form>
      {sort.map(d => <p key={d.age}> <li>{d.name}</li> <li>{d.age}</li></p>)}


    </>


  )
}

export default App
