import React, { Component } from 'react'
import ParentTable from './ParentTable'

export class CheckedOutCard extends Component {
  render() {
    return (
        <div className="card w-fit bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Checked Out</h2>
          <ParentTable />
        </div>
      </div>
    )
  }
}

export default CheckedOutCard