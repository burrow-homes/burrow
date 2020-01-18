import React, { Component } from "react";
import {Tabs} from "../modules/Tabs.js";
import "./SplashPage.css";
import "../../utilities.css";
import SearchBar from "../modules/SearchBar.js";

class SplashTab extends Component{
  render(){
    return (
      <Tabs styleName="SplashPage">
        <div label="Room">
          hi this is tab 0 room oc do not steal
        </div>

        <div label="Roommate">
          hi this is tab 1 roommate oc do not steal
        </div>
      </Tabs>
    )
  }
}

class SplashPage extends Component {
  render(){
    return (
      <div>
        <h1>Burrow</h1>
        <h2>i'm looking for a...</h2>
        <SplashTab />
        <SearchBar defaultText="example search bar" />
      </div>
    );
  }
}

export default SplashPage;