import React from 'react'
import {render} from 'react-dom'
import App from './App'
import App2 from './App2'

const Ap = ()=>(
 <div>
  <App/>
  <hr/>
  <App2/>
 </div>
)



render(<Ap/>, document.getElementById('root'))
