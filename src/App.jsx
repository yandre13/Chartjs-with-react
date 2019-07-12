import React from "react"
import { Line } from "react-chartjs-2"
import {data1, options} from './variables'

export default ()=>{


 
 

 
  return (
   <>
   <h3>Chart first {'<3'}</h3>
   <div style={{width:700, height:250, backgroundColor: 'hsl(280, 0%,10%)'}}>
    <Line options={options}
     data={data1.data} />
   </div>
  </>
  )
 
  

}