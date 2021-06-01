import AllRec from './components/Receipts';
import ReceiptsInfo from './components/Receipt';
import Form from './components/Form';
import React, {useState} from 'react';
import './App.css';
import './style.css'

function App() {
  //STATE
  const [value, setValue] = useState(null);
  //FUNCTION
  const getData = async(searchTerm)=>{
    const response = await fetch(AllRec)
  //JSON
  const data = await response.json();
  //set Value
  setValue(data)
  console.log(data)
  }
  return (
    <div className="App">
      <h1>Korilla</h1>
      <Form receiptSearch={getData}/>
      <AllRec value = {value}/>
    </div>
  );
}

export default App;
