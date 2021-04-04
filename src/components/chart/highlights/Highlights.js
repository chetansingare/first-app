import react from 'react'
import './Highlights.css'
import man from './../../../images/man.png'
import { Line } from 'react-chartjs-2'

function Highlights() {
  return (<>
    <div className='Highlights_main'>
      <div className='Highlights'>
        <h4>HIGHLIGHTS</h4>
        <ul>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/1.jpg" /><div><p>Beck collier</p><button id='Highlights_btn'>$100</button></div></li>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/2.jpg" /><div><p>Angelo Hume</p><button id='Highlights_btn'>$100</button></div></li>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/3.jpg" /><div><p>sam Melendez</p><button id='Highlights_btn'>$100</button></div></li>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/4.jpg" /><div><p>Beck collier</p><button id='Highlights_btn'>$100</button></div></li>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/5.jpg" /><div><p>Angelo Hume</p><button id='Highlights_btn'>$100</button></div></li>
          <li><img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/6.jpg" /><div><p>sam Melendez</p><button id='Highlights_btn'>$100</button></div></li>      </ul>
      </div>
      <div className='monthlyStatics'>
        <h4 className='monthlytatics_h'>Monthly Statics</h4>
        <p className='monthlytatics_p'> <span id='plus'>+ </span><span id='seventySix'>76 </span>Revenue Increased this Quarter</p>
        <Line
          width={200}
          height={100}
          data={{
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
              label: 'marine',
              data: [20, 40, 60, 80, 100, 120, 140],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          }
          }

        />
      </div>
    </div>
  </>
  )

}
export default Highlights;