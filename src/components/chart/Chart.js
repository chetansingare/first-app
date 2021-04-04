import react, { useState } from 'react'
import './Chart.css';
import IncomeReport from './incomereport/Incomereport'
import Highlights from './highlights/Highlights'
import LeftSideBar from './leftsidebar/LeftSideBar'
function Chart(props) {
  return (
    <>
      <div className='chart_main'>
        {props.sidebarStatus &&
          <LeftSideBar />
        }
        <div className='chart'>
          <IncomeReport />
          <Highlights />
        </div>
      </div>
    </>
  )
}
export default Chart;