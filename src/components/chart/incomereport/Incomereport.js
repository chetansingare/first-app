import react from 'react'
import './Incomereport.css'
import { HorizontalBar } from 'react-chartjs-2'

function IncomeReport() {
  return (
    <div className='Incomereport_main'>
      <div className='Incomereport_head'>
        <h4 id='Incomereport_h'>Income report</h4>
        <button id="Incomereport_btn">Options</button>
      </div>
      <div>
        <HorizontalBar
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
      <div className='Incomereport_lightcard'>
        <button id='Incomereport_lightcard_left'>Income</button>
        <button id='Incomereport_lightcard_Right'>Expenses</button>
      </div>
      <div className='Incomereport_bottom'>
        <h3>Tabbed Content</h3>
        <p>Example of various options built with Fiori</p>
        <div className='Incomereport_bottom_cards'>
          <div className='Incomereport_bottom_cards_one'>
            <div id='Incomereport_bottom_p'>
              <h6 className="sales">Sales</h6>
              <h6 className="sales">Monthly goals</h6>
            </div>
            <p className="sales-percentage">175%</p>
            <h2 className="sale-price">$976</h2>
          </div>
          <div className='Incomereport_bottom_cards_one'>
            <div id='Incomereport_bottom_p'>
              <h6 className="sales">Clients</h6>
              <h6 className="sales">Returning</h6>
            </div>
            <p className="sales-percentage">175%</p>
            <h2 className="sale-price-c">$976</h2>
          </div>
        </div>

      </div>
    </div>

  )
}
export default IncomeReport;