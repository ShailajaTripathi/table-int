import React from "react";
import './Styles/table.css'
import {BsThreeDotsVertical} from 'react-icons/bs';

function Pills() {
  return (
    <div className="table-container">
      <h2 className="table-head">Table Caption</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">PROJECT</th>
      <th scope="col">CLIENT</th>
      <th scope="col">STATUS</th>
      <th scope="col">ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Angular Project</th>
      <td>Albert Cook</td>
      <td className="active">ACTIVE</td>
      <td><BsThreeDotsVertical/></td>
    </tr>
    <tr>
      <th scope="row">React Project</th>
      <td>Barry Hunter</td>
      <td className="complete">COMPLETED</td>
      <td><BsThreeDotsVertical/></td>
    </tr>
    <tr>
      <th scope="row">VueJs Project</th>
      <td>Trevor Baker</td>
      <td className="schedule">SCHEDULED</td>
      <td><BsThreeDotsVertical/></td>
    </tr>
    <tr>
      <th scope="row">Bootstrap Project</th>
      <td>Jerry Milton</td>
      <td className="pending">PENDING</td>
      <td><BsThreeDotsVertical/></td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default Pills;
