import React, { Component } from "react";
import Navbar from "./Navbar";
import ParentTable from "./ParentTable";

export class Grid extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ParentTable />
      </div>
    );
  }
}

export default Grid;
