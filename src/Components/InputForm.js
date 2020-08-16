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
                Cash: 999

            }],
            display: true,
            value: "",
            style: { display: "none" },
            para: ""
        }
    }



    render() {
        let styles, x
        let change
        const { UserInfo, display, value } = this.state
        const onchange = (e) => {
            this.setState({ value: e.target.value })
        }
        display ? styles = { display: "block" } : styles = { display: "none" }
        const clicked = (e) => {
            console.log(e.target)
            x = e.target.getAttribute("value")
            this.setState({ display: false })
            this.setState({ style: styles })
            this.setState({ para: x })
        }
        change = () => {
            const { value, UserInfo, para } = this.state
            const newInfo = {}
            console.log(para)
            newInfo[para] = value;
            console.log(newInfo)
            const oldInfo = UserInfo[0]
            console.log(oldInfo)
            const newPers = { ...oldInfo, ...newInfo }
            console.log(newPers)
            this.setState(() => { return ({ UserInfo: [newPers] }) })
            this.setState({ display: true })
            this.setState({ style: styles })
            // console.log(this.state.UserInfo)
        }
        return (
            <div className="container">
                <SideSection info={UserInfo} />
                <MainSection infor={this.state} clicked={clicked} onchange={onchange} change={change} />
            </div>
        )
    }
}

export default InputForm
