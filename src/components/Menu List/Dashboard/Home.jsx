import React from 'react'
import Chart from '../../../bars/chart/Chart';
import Featured from '../../../bars/featured/Featured';
import Navbar from '../../../bars/navbar/Navbar';
import Sidebar from '../../../bars/sidebar/Sidebar';
import Widgets from '../../../bars/widget/Widgets';
import "./home.css"
const Home=() => {
  return (
    <div className='Dash'>
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className='widgets'>
          
            <Widgets type='revenue'/>
          <Widgets type='production'/>
          
          <Widgets type='sales'/>
          <Widgets type='employees'/>
          
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
  );
}

export default Home;