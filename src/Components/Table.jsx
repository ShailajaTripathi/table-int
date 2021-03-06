import React from "react";
import './Styles/table.css'
import Popup from 'reactjs-popup';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ApprovePopup from "./ApprovePopup";

function Pills() {
  return (
    <div className="table-container">
      <h2 className="table-head">Order Status</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ORDERS</th>
            <th scope="col">CLIENT</th>
            <th scope="col">STATUS</th>
            <th scope="col">APPROVAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Laptop</th>
            <td>Albert Cook</td>
            <td className="active">  <span className="active status">ACTIVE</span></td>
            <td className="action"> <Popup modal
              trigger={<BsThreeDotsVertical />} >
              <ApprovePopup />
            </Popup></td>
          </tr>
          <tr>
            <th scope="row">Clothes</th>
            <td>Barry Hunter</td>
            <td className="complete"><span className="complete status">COMPLETED</span></td>
            <td className="action"> <Popup modal
              trigger={<BsThreeDotsVertical />} >
              <ApprovePopup />
            </Popup></td>
          </tr>
          <tr>
            <th scope="row">Mobile Phone</th>
            <td>Trevor Baker</td>
            <td className="schedule"><span className="schedule status">SCHEDULED</span></td>
            <td className="action"><Popup modal
              trigger={<BsThreeDotsVertical />}><ApprovePopup /></Popup></td>
          </tr>
          <tr>
            <th scope="row">Footware</th>
            <td>Jerry Milton</td>
            <td className="pending"><span className="pending status">PENDING</span></td>
            <td className="action"> <Popup modal
              trigger={<BsThreeDotsVertical />} >
              <ApprovePopup />
            </Popup></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pills;
