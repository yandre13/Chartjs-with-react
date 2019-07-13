import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import { optionsLine } from "./variables"

export default () => {
  const [state, setState] = useState({
    data1: [10, 0, 0, 0, 0, 0, 0],
    data2: [10, 0, 0, 0, 0, 0, 0]
  })

  const getData = canvas => {
    let ctx = canvas.getContext("2d")

    let gradientStroke1 = ctx.createLinearGradient(1, 230, 0, 50),
      gradientStroke2 = ctx.createLinearGradient(1, 210, 0, 50)

    gradientStroke1.addColorStop(1, "rgba(29,140,248,0.2)")
    gradientStroke1.addColorStop(1, "rgba(29,140,248,0.0)")
    gradientStroke1.addColorStop(0, "rgba(29,140,248,0)")

    gradientStroke2.addColorStop(1, "rgba(122,255,51,0.1)")
    gradientStroke2.addColorStop(1, "rgba(122,255, 51,0.0)")
    gradientStroke2.addColorStop(0, "rgba(122,255,51,0)")

    return {
      labels: [
        "Sunday",
        "Monday",
        "Twesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Videos",
          borderColor: "hsl(150,40%,20%)",
          pointBorderColor: "hsl(150,40%,40%)",
          pointBackgroundColor: "hsl(150,40%,20%)",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          backgroundColor: gradientStroke2,
          data: state.data1,
          borderWidth: 2
        },
        {
          label: "Snaps",
          borderColor: "hsl(220,60%,20%)", // line -------- and []
          pointBorderColor: "hsl(220,60%,50%)", // (.)
          pointBackgroundColor: "hsl(220,60%,20%)", //point (.)
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          backgroundColor: gradientStroke1,
          data: state.data2,
          borderWidth: 2
        }
      ]
    }
  }

  useEffect(()=>{
   setState({...state,
    data1: [24, 25, 1, 10, 32, 2, 12],
    data2: [14, 15, 21, 0, 12, 24, 22]
   })
  },[])

  return (
    <>
      <h3 style={{fontFamily: 'sans'}}>Chart first {"<3"}</h3>
      <div
        style={{ width: 700, height: 280, backgroundColor: "hsl(280, 0%,10%)" }}
      >
        <Line options={optionsLine} data={getData} />
      </div>
      <button
       onClick={e=>{
        let arr = []
        state.data1.forEach((el,i)=>{
         el = el+ 10
         arr.push(el)
        })
        setState({...state, data1:arr})
       }}
      >
       Update
      </button>
      --
      <button
       onClick={e=>{
        let arr = []
        state.data1.forEach((el,i)=>{
         el = el- 10
         arr.push(el)
        })
        setState({...state, data1:arr})
       }}
      >
       Previuos
      </button>
    </>
  )
}
