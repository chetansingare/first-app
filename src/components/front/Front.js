import react from 'react';
import search from './../../images/search.png'
import layout from './../../images/layout.png'
import idea from './../../images/idea.png'
import tag from './../../images/tag.png'
import user from './../../images/user.png'
import menu from './../../images/menu.png'
import bell from './../../images/bell.png'
import man from './../../images/man.png'
import star from './../../images/star.png'
import './Front.css';
import Popup from "reactjs-popup";
import PopUpMenu from './menu/popup/PopUpMenu';
import Component_menu from './menu/component-menu/component-menu'
function Nav() {
  return (
    <>
      <div className='Nav'>
        <div className='Nav1'>
          <ul>
            <li><a href='#'>DashboardPack.com</a></li>
            <li><a href='#' >GridMenu</a></li>
          </ul>
          <ul>
            <li><a href='#'>Create Account</a></li>
            <li><a href='#'>Login</a></li>
            <li><a>Language</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}
function Top() {
  return (
    <>
      <div className='top'>
        <div className='top2'>
          <div className='logo'>
            <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/logo.png" />
          </div>
          <ul>
            <li>
              <a href="#"><img src={user} />
                <Popup trigger={<button className='FrontPopup'> Dashboards</button>} position="bottom left">
                  <div className='Dashboard_PopUp'><PopUpMenu /></div>
                </Popup>
              </a>
            </li>
            <li>
              <a href="#"><img src={layout} />
                <Popup trigger={<button className='FrontPopup'> Layouts</button>} position="bottom left">
                </Popup>
              </a>
            </li>
            <li>
              <a href="#"><img src={idea} />
                <Popup trigger={<button className='FrontPopup'>components</button>} position="bottom left">
                  <div className='Dashboard_PopUp'><Component_menu /></div>
                </Popup>
              </a>
            </li>
            <li>
              <a href="#"><img src={tag} />
                <Popup trigger={<button className='FrontPopup'> Widgets</button>} position="bottom left">
                  <div className='Dashboard_PopUp'><PopUpMenu /></div>
                </Popup>
              </a>
            </li>
          </ul>
          <div className='top2_right'>
            <div className='top2_input'>
              <img src={search} />
              <input placeholder="Search" />
            </div>
            <div className="top_button">
              <button id='firstbutton'><img src={menu} /></button>
              <button id='secondbutton'><img src={bell} /></button>
              <button id='thirdbutton'><img src='https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/3.jpg' /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function AppTittle() {
  return (
    <>
      <div className='PagetitleMain'>
        <div className='Pagetitle'>
          <div className='Pagetitle_inner'>
            <h3 id="inner_head">Helpdesk</h3>
            <p id="inner_paragraph">This is an example dashboard created using build-in elements and components.</p>
          </div>
          <div className="Pagetittle_btn">
            <button id='star'><img src={star} /></button>
            <button id='add'>+ Add New</button>
          </div>
        </div>
      </div>
    </>
  )
}
export { Top, Nav, AppTittle };