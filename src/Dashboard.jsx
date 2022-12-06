import React, { Component } from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import CheckedOutCard from "./CheckedOutCard";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="grid grid-cols-2 gap-4 pl-4">
          <div className="">
            <CheckedOutCard />
          </div>
          <div className="">
            <Stats />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
