import React from "react"
import Card from "../Card"
import Interactions from "../Interactions"

export const colors = [
  "bg-primary text-white",
  "bg-primary text-white",
  "bg-secondary",
  "bg-success",
  "bg-danger text-white",
  "bg-info text-white",
  "bg-success",
  "bg-dark",
  "bg-dark"
]

const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

function App() {
  return (
    <>
      <div className={`navbar navbar-expand-lg navbar-light`}>
        <div className='ml-1 row w-100'>
          <div className='col-12'>
            <Interactions bgColor={randomColor} />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row w-100 align-middle'>
          {colors.map((color, index) => (
            <Card key={`${index + color}`} bgColor={randomColor} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
