import react, { useState } from 'react';
import './Appinner.css';
import menu1 from './../../images/menu1.png'
import arrow from './../../images/arrow.png'

function Appinner(props) {
  const [display, displayValue] = useState(false)
  
  window.onclick = (event) => {
    if (event.target.matches(".Appinner_left_inner"))
      props.SideBar_b(!props.SideBar_a)
    if (!event.target.matches("#menu")) {
      displayValue(false)
    }
  }
  return (
    <>
      <div className='Appinner_main'>
        <div className='Appinner'>
          <div className='Appinner_left'>
            <a href='#' className='Appinner_left_inner'><img src={menu1} />Show Page Menu</a>
          </div>
          <div className='Appinner_mid'>
            <ul className='Appinner_mid_ul'>
              <li><a href='#'>Overview</a></li>
              <li><a>Audiences</a></li>
              <li><a>Demographics</a></li>
              <li><a id="menu" style={{ position: "relative" }} onClick={() => displayValue(true)}>More<img id='mid_arrow' src={arrow}></img></a>
                <div>
                  {display &&
                    <h1 style={{ position: "absolute" }}>Hello World</h1>
                  }
                </div></li>
            </ul>
          </div>
          <div className='Appinner_right'>
            <div className='Appinner_left'>
              <a href='#'>Show Page Drawer<img src={menu1} /></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Appinner;