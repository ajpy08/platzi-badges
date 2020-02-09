import React from "react";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        .
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Javi"
                lastName="Puc"
                twitter="ajpy08"
                jobTitle="Engineer"
                avatarURL="https://secure.gravatar.com/avatar/7bb83a5a6a3e26948f3300581473134f"
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
