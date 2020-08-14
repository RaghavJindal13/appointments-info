import React, { Component } from 'react'
import SideSection from './SideSection'
import Appointment from './Appointment'

export class Myappointments extends Component {
    constructor() {
        super()
        this.state = {
            UserInfo: [{
                Appointment: "Laxmi Optics",
                Time: "6:00 PM",
                numberofpersons: 3,
                Description: "Loreum Ipsum",
                Email: "jhondoe@abc.com",
                Date: new Date(2018, 0, 5),
                Cash: 199.99
            }]
        }
    }

    render() {
        const { UserInfo } = this.state
        return (
            <div className="container">
                <SideSection info={UserInfo} />
                <Appointment info={UserInfo} />
            </div>
        )
    }
}

export default Myappointments
