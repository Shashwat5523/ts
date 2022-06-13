import React from 'react'
import Datatable from '../../../bars/datatable/Datatable'
import Navbar from '../../../bars/navbar/Navbar'
import Sidebar from '../../../bars/sidebar/Sidebar'


const Tables = () => {
  return (
    <div className='Dash'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <Datatable/>
        </div>
      </div>
  )
}

export default Tables