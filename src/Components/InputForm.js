import React, { Component } from 'react'
import SideSection from './SideSection'
import MainSection from './MainSection'

export class InputForm extends Component {
    constructor() {
        super()
        this.state = {
            UserInfo: [{
                FirstName: "Jhon",
                LastName: "Doe",
                Email: "jhondoe@abc.com",
                UserName: "Jhondoe1",
                PhoneNo: "+911234567890",
                Adress: ["Address1", "Address2", "Address3"],
                Cash: 199.99

            }]
        }
    }

    render() {
        const { UserInfo } = this.state
        return (
            <div className="container">
                <SideSection info={UserInfo} />
                <MainSection info={UserInfo} />
            </div>
        )
    }
}

export default InputForm
