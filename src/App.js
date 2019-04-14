import React from 'react'

const getData = async () => {
  const res = await fetch('http://localhost:8081/api/foo')
  const data = await res.json()
  return data 
}

const App = () => {  
  getData().then(res => console.log(res))

  return (
  <h1>
    Hello world!
  </h1>
)}

export default App
