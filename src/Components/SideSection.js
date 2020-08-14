import React, { Component } from 'react'

export default class SideSection extends Component {
    render() {
        const { info } = this.props
        return (
            <div className="sidesection">
                <p>{info[0].Email}</p>
                <p className="cash">9Cash:<span className="box">{info[0].Cash}</span></p>
                <br />
                <br />
                <ul>
                    <li><a href="/Myaccount" className="btn">My Account</a></li>
                    <li><a href="/Myappointments" className="btn">My Appointments</a></li>
                    <li><a href="#" className="btn">Logout</a></li>
                </ul>
            </div>
        )
    }
}
