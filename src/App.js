import { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

/*
  we want a form and a progress bar 
  the progress bar should fill as we enter fields

    Document Name
    Document Type -> dropdown
    Category
    Email
*/

function App() {
  let [complete, setComplete] = useState(0)
  let [nameFlag, setNameFlag] = useState(false) //abstract away
  let [typeFlag, setTypeFlag] = useState(false) //abstract away
  let [categoryFlag, setCategoryFlag] = useState(false) //abstract away
  let [emailFlag, setEmailFlag] = useState(false) //abstract away

  let [name, setName] = useState("")
  let [docType, setDocType] = useState("")
  let [category, setCategory] = useState("")
  let [email, setEmail] = useState("")
  let [objData, setObjData] = useState({})

  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value)
    if(e.target.value === ""){
      setComplete(complete > 0 ? complete-25: 0)
      setNameFlag(false)
    }
    if(!nameFlag){
      setNameFlag(true)
      if(complete !== 100) setComplete(complete + 25)
    }
  }


  const handleDocType = e => {
    e.preventDefault()
    setDocType(e.target.value)
    if(e.target.value === ""){
      setComplete(complete > 0 ? complete-25: 0)
      setTypeFlag(false)
    }
    if(!typeFlag){
      setTypeFlag(true)
      if(complete !== 100) setComplete(complete + 25)
    }
  }

  const handleCategory = e => {
    e.preventDefault()
    setCategory(e.target.value)
    if(e.target.value === ""){
      setComplete(complete > 0 ? complete-25: 0)
      setCategoryFlag(false)
    }
    if(!categoryFlag){
      setCategoryFlag(true)
      if(complete !== 100) setComplete(complete + 25)
    }
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
    if(e.target.value === ""){
      setComplete(complete > 0 ? complete-25: 0)
      setEmailFlag(false)
    }
    if(!emailFlag){
      setEmailFlag(true)
      if(complete !== 100) setComplete(complete + 25)
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    setObjData({name: name, docType: docType, category: category, email: email})
    //validate data here
    console.log(objData)
  }
  return (
    <div className="app">
      <h1>Document Information</h1>
      <ProgressBar completed={complete} bgcolor={"#0085CA"} />
      <form>
      <label>
        Document Name:
        <br />
        <input
          type='text'
          name='name'
          onChange={handleName}
          value={name}
          required
        >
        </input>
      </label>

      <label>
        Document Type: 
        <br />
        <select
          name='docType'
          onChange={handleDocType}
        >
          <option value=''></option>
          <option value='pdf'>PDF</option>
          <option value='word'>Word</option>
        </select>
      </label>
  
      <label>
        Category: 
        <br />
        <select
        onChange={handleCategory}
        name='category'
        >
          <option value=''></option>
          <option value='audit'>Audit</option>
          <option value='other'>Other</option>
        </select>
      </label>

      <label>
        Email:
        <br />
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleEmail}
          required
        >
        </input>
      </label>
      <button
        onClick={onSubmit}
      >Submit</button>
      </form>
    </div>

  );
}

export default App;
