import React from 'react'
import './widget.css'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import SwitchAccountSharpIcon from '@mui/icons-material/SwitchAccountSharp';


const Widgets = ({ type }) => {
    let data;
    const amount = 100; 

    switch (type){
        case "revenue":
            data={
                title:"Total Revenue",
                money:true,
                icon:<LocalAtmOutlinedIcon className='iccn' style={{color:"red",fontSize:"5rem"}}/>,
            };
            break;
        case "production":
            data={
                title:"Production",
                money:false,
                icon:<ProductionQuantityLimitsSharpIcon className='iccn'  style={{color:"rgb(125, 146, 82)",fontSize:"5rem"}}/>,
            };
                break;
        case "sales":
            data={
                title:"Sales",
                money:false,
                icon:<BarChartSharpIcon className='iccn' style={{color:"green",fontSize:"5rem"}}/>,
            };
                break;
        case "employees":
            data={
                title:"Employees",
                money:false,
                icon:<SwitchAccountSharpIcon className='iccn' style={{fontSize:"5rem"}}/>,
            };
                break;
        default:
            break;
    }

  return (
    <div className='widget'>
       <div className="left">
        <div className='icn'>{data.icon}</div>
       </div>
       <div className="right">
        <span className='title'>{data.title}</span>
        <span className='money'>{data.money && "$"}{amount} {data.money && "million"}</span>
       </div>
    </div>
  )
}

export default Widgets