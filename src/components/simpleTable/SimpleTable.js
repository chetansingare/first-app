import react from 'react'
import man from './../../images/man.png'
import './SimpleTable.css'
import menu from './../../images/menu.png'

function SimpleTable() {
  return (
    <>
      <div className='SimpleTable'>
        <div className='SimpleTable_Top'>
          <div className='SimpleTable_Top_h'>
            <h3 className='SimpleTable_Top_h'>Simple Table</h3>
          </div>
          <div className='SimpleTable_Top_Btn'>
            <button className='SimpleTable_Top_Btn_Left'>LastWeek</button>
            <button className='SimpleTable_Top_Btn_Right'>All Month</button>
          </div>
        </div>
        <div className='SimpleTable_Table'>
          <table className='SimpleTable_Table'>
            <thead>
              <tr >
                <th className='SimpleTable_Table_Head'>#</th>
                <th className='SimpleTable_Table_Head'>Status</th>
                <th className='SimpleTable_Table_Head_Name'>Name</th>
                <th className='SimpleTable_Table_Head'>Progress</th>
                <th className='SimpleTable_Table_Head'>Sales</th>
                <th className='SimpleTable_Table_Head'>Actions</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className='SimpleTable_Table_td'>#345</td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Status' style={{ backgroundColor: '#f7b924' }}>pending</button>
                </td>
                <td className='SimpleTable_Table_td'>
                  <div className='SimpleTable_Table_Name'>
                    <img src={man} />
                    <div className='SimpleTable_Table_Name_head'>
                      <h5 className='SimpleTable_Table_Name_h'>John Deo</h5>
                      <h6 className='SimpleTable_Table_Name_h'>Web Developer</h6>
                    </div>
                  </div>
                </td>
                <td className='SimpleTable_Table_td'>
                  <progress value='40' max='170'></progress>
                </td>
                <td className='SimpleTable_Table_td'>
                </td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Action'><img src={menu} /></button>
                </td>
              </tr>
              <tr>
                <td className='SimpleTable_Table_td'>#347</td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Status' style={{ backgroundColor: '#3ac47d' }}>completed</button>
                </td>
                <td className='SimpleTable_Table_td'>
                  <div className='SimpleTable_Table_Name'>
                    <img src={man} />
                    <div className='SimpleTable_Table_Name_head'>
                      <h5 className='SimpleTable_Table_Name_h'>Ruben Tillmen</h5>
                      <h6 className='SimpleTable_Table_Name_h'>Etiam sit amet orci eget</h6>
                    </div>
                  </div>
                </td>
                <td className='SimpleTable_Table_td'>
                  <progress value='60' max='100'></progress>
                </td>
                <td className='SimpleTable_Table_td'>
                </td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Action'><img src={menu} /></button>
                </td>
              </tr>
              <tr>
                <td className='SimpleTable_Table_td'>#321</td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Status' style={{ backgroundColor: '#d92550' }}>in progress</button>
                </td>
                <td className='SimpleTable_Table_td'>
                  <div className='SimpleTable_Table_Name'>
                    <img src={man} />
                    <div className='SimpleTable_Table_Name_head'>
                      <h5 className='SimpleTable_Table_Name_h'>Elliot Huber</h5>
                      <h6 className='SimpleTable_Table_Name_h'>Lorem ipsum dolor sic</h6>
                    </div>
                  </div>
                </td>
                <td className='SimpleTable_Table_td'>
                  <progress value='19' max='100'></progress>
                </td>
                <td className='SimpleTable_Table_td'>
                </td>
                <td className='SimpleTable_Table_td'>
                  <button className='SimpleTable_Table_Action'><img src={menu} /></button>
                </td>
              </tr>
              <tr>
                <td className='SimpleTable_Table_td_Last'>#55</td>
                <td className='SimpleTable_Table_td_Last'>
                  <button className='SimpleTable_Table_Status' style={{ backgroundColor: '#16aaff' }}>on hold</button>
                </td>
                <td className='SimpleTable_Table_td_Last'>
                  <div className='SimpleTable_Table_Name'>
                    <img src={man} />
                    <div className='SimpleTable_Table_Name_head'>
                      <h5 className='SimpleTable_Table_Name_h'>Vinnie Wagstaff</h5>
                      <h6 className='SimpleTable_Table_Name_h'>UI Designer</h6>
                    </div>
                  </div>
                </td>
                <td className='SimpleTable_Table_td_Last'>
                  <progress value='75' max='100'></progress>
                </td>
                <td className='SimpleTable_Table_td_Last'>
                </td>
                <td className='SimpleTable_Table_td_Last'>
                  <button className='SimpleTable_Table_Action'><img src={menu} /></button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className='SimpleTable_Bottom'>
          <div className='SimpleTable_Bottom_Left'>
            <button>Delete</button>
          </div>
          <div className='SimpleTable_Bottom_Right'>
            <a>View All</a>
            <button>Add New Entry</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SimpleTable;