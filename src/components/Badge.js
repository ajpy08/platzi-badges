import React from "react";

import confLogo from '../images/badge-header.svg'

import './styles/Badge.css'

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://es.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Javier <br /> Puc
          </h1>
        </div>

        <div className="Badge__section-info">
            <h3>Frontend Engineer</h3>
            <div>@ajpy08</div>
        </div>

        <div className="Badge__footer">
            #platzi
        </div>
      </div>
    );
  }
}

export default Badge;
