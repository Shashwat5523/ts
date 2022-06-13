import React from 'react'
import "./featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1>Total Revenue</h1>
            <MoreVertIcon />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={1}/>
            </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$500</p>
                <p className='desc'>Previous transactions processing.Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemtitl">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="amt">$12k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitl">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="amt">$12k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitl">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="amt">$12k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured