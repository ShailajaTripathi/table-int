import React from 'react'
import './Styles/popup.css'

function ApprovePopup() {
  return (
    <div className='approvePopup-container'>
        {/* <h3>Give our Approval</h3> */}
<h5>Product Details</h5>
<div className='popup-details'></div>
<p>Product ID: #2re545</p>
<p>Product Name: laptop</p>
<button className='approve-btn'>Approve</button>
    </div>
  )
}

export default ApprovePopup


//  this.parentNode.remove()