import React from 'react';
import Navbar from '../components/Navbar'
import logo from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="Logo" />
                </div>

                .<div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Javi" lastName="Puc" twitter="ajpy08" jobTitle="Engineer" avatarURL="https://es.gravatar.com/avatar?d=identicon"></Badge>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;