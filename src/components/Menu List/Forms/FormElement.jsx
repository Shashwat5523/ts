import React from 'react'
import Sidebar from '../../../bars/sidebar/Sidebar'
import Navbar from '../../../bars/navbar/Navbar'
import Form from '../../../bars/navbar/form/Form'

const FormElement = () => {
  return (
    <div className='Dash'>
    <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="form"><Form/></div>
        </div>
    </div>
  )
}

export default FormElement
