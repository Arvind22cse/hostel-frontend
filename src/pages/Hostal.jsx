import React from 'react'
import './Hostal.css'
function Hostal() {
  return (
    <body>
      
    
    <div className='hostal'>
      <h1 className='head'>Hostal Utilty Service</h1><br />
      <h1 className='head2'>Login As</h1><br />
      
      <form action="/signinadmin">
      <button type='sumbit'>Admin</button>
      </form><br />
      <form action="/signin">
      <button type='sumbit'>Student</button>
      </form>
    </div>
    </body>
  )
}

export default Hostal
