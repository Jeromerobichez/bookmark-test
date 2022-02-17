import React, { useState, useEffect } from 'react';
import './App.css';
import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'

function App() {
  const [input, setInput] = useState('')
  const [bookMark, setBookMark] = useState('')
  const [bookMarkData, setBookMarkData] = useState([])
  const [bookMarksArray, setBookMarksArray] = useState([])

  let myArray = bookMarksArray


  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://noembed.com/embed?url=${input}`)
      .then(res => res.json())
      .then(res => {
        let upload_application = new Date()
        const formatDate = (date)=>{
          let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
          return formatted_date;
      }
       let formatUpload = formatDate(upload_application)
        let refId = res.video_id || res.url 
        res = {...res, formatUpload, refId}
        setBookMarksArray([...bookMarksArray, res])
      })

  }

  const deleteElem = (id) => {
      setBookMarksArray(bookMarksArray.filter((item) => item.refId !== id))
     
  }

  return (
    <div className="App">
      <UrlForm handleChange={handleChange} handleSubmit={handleSubmit} input={input} />
      <UrlList bookMarksArray={bookMarksArray} deleteElem={deleteElem} />
    </div>
  );
}

export default App;
