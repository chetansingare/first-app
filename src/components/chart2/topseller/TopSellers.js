import react from 'react'
import './TopSellers.css'
import { Pie } from "react-chartjs-2";

function TopSellers() {
  return (
    <>
      <div className='TopSellers'>
        <div className='TopSellers_Top'>
          <h5 className='TopSellers_Top_h1'>Top Sellers</h5>
          <h4 className='TopSellers_Top_h2'>Yet another Example of Card Boxes</h4>
          <div className='TopSellers_Top_Btn'>
            <button className='TopSellers_Top_Btn_1' >John</button>
            <button className='TopSellers_Top_Btn_2'>Mary</button>
            <button className='TopSellers_Top_Btn_3'>Katie</button>
          </div>
        </div>
        <div className='TopSellers_Mid'>
          <div className='TopSellers_Mid_Left'>
            <Pie className='TopSellers_Mid_Pie'
              data={{
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
          <div className='TopSellers_Mid_Right'>
            <h2 className='TopSellers_Mid_Right_h_1'>$ 158 </h2>
            <h4 className='TopSellers_Mid_Right_h_2'>Sales Today</h4>
            <h2 className='TopSellers_Mid_Right_h_3'>$ 346</h2>
            <h4 className='TopSellers_Mid_Right_h_4'>Sales this Month</h4>

          </div>

        </div>
        <div className='TopSellers_Bottom'>
          <div className='TopSellers_Bottom_Right'>
            <button><h4>Block Button May Be ?</h4></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default TopSellers;