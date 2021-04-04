import react from 'react'
import './LeftSideBar.css'

function LeftSideBar() {
  return (<>
    <div className='LeftSideBar'>
      <h4 className='LeftSideBar_h'>Dashboard Example</h4>
      <div className='Left_btn_Main'>
        <button className='Left_Btn'>Analytics</button>
        <button className='Left_Btn'>Management</button>
        <button className='Left_Btn'>Advertisement</button>
        <button className='Left_Btn'>Helpdesk</button>
        <button className='Left_Btn'>Monitoring</button>
        <button className='Left_Btn'>cryptocurrency</button>
        <button className='Left_Btn'>Project Management</button>
        <button className='Left_Btn'>Product</button>
        <button className='Left_Btn'>Statistics</button>
      </div>
    </div>
  </>
  )
}
export default LeftSideBar;