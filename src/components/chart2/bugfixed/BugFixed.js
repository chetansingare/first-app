import react from 'react'
import './BugFixed.css'
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import education from './../../../images/education.png'

function BugFixed() {
  return (
    <>
      <div className='BugFixed'>
        <div className='BugFixed_Top'>
          <div className='BugFixed_Top_Logo'>
            <img src={education} />
          </div>
          <h1>63.2k</h1>
          <h2>Bugs Fixed</h2>
          <h2>175.5%</h2>
          <Bar
            width={100}
            height={50}
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
        <div className='BugFixed_Bottom'>
          <div className='BugFixed_Bottom_Logo'>
            <img src={education} />
          </div>
          <h1>1.5M</h1>
          <h2>Bugs Fixed</h2>
          <h2>Down by  54.1% from 30 days ago</h2>
          <Line
            width={100}
            height={50}
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
export default BugFixed;