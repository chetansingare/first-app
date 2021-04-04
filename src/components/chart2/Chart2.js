import react from 'react'
import BugFixed from './bugfixed/BugFixed'
import './Chart2.css'
import TopSellers from './topseller/TopSellers'
import Userprofile  from './userprofile/UserProfile'

function Chart2() {
  return (
    <>
    <div className='Chart2'>
      <div className='Chart2_Left'>
      <BugFixed />
      </div>
      <div className='Chart2_Right'>
        <TopSellers/>
        <Userprofile/>
      </div>
    </div>
    </>
  )
}
export default Chart2;