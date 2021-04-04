import react from 'react'
import './PopUpMenu.css'

function PopUpMenu() {
  return (
    <>
      <div className="drop">
        <div className="drop_header">
          <h3>Dashboards</h3>
          <h5>This is a dropdown header example!</h5>
        </div>
        <div className="drop_down_content">
          <p>Analitics</p>
          <p>Helpdesk</p>
          <p>Monitoring</p>
          <p>CryptoCurrency</p>
          <p>Monitoring</p>
          <p>Product</p>
          <p>Statics</p>
        </div>
        <div className="purchase_button">
          <button>Purchase</button>
        </div>
      </div>
    </>
  )
}
export default PopUpMenu;