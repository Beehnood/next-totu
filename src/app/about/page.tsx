import axios from 'axios';
import React from 'react'



export interface IGetProducts {
  userId: number
  id: number
  title: string
  completed: boolean
  description: string
}


async function About() {


const { data } = await axios ("https://fakestoreapi.com/prssoducts")
  return (
    <>
     <div
      className='text-3xl font-bold text-center m-4'
      
     >About</div>

     {data.map((item:IGetProducts) => (
      <div 
      key = {item.id}>
        <h2>
          {item.title}
        </h2>
      </div>
     ))
     
     }
    
    </>
   
  )
}

export default About