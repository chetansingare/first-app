import react from 'react'
import './UserProfile.css'

function UserProfile(){
    return(
        <>
        <div className='UserProfile'>
            <div className=' UserProfile_Top'>
            <div className=' UserProfile_Top_Left'>
                <div className=' UserProfile_Top_Left_Logo'>
                <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/1.jpg" />
                </div>
                <div className=' UserProfile_Top_Left_Head'>
                <h4>Ruben Tillman</h4>
                <h4>Etiam sit amet orci eget</h4>
                </div>
                </div>
                <div className=' UserProfile_Top_Right'>
                    <button>View Profile</button>
                </div>

            </div>
            <div className=' UserProfile_Mid'>
                <h3>12 new leads, $56.24 in sales</h3>
            </div>
            <div className=' UserProfile_Bottom'>
                <div className='UserProfile_Bottom_up'>
                <button className='UserProfile_Bottom_up_Left'>automation</button>
                <button className='UserProfile_Bottom_up_Right'>report</button>
                </div>
                <div className='UserProfile_Bottom_down'>
                <button className='UserProfile_Bottom_down_Left'>activity</button>
                <button className='UserProfile_Bottom_down_Right'>setting</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserProfile;