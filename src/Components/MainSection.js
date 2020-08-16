import React, { Component } from 'react'
import ReactPencil from 'react-pencil'

export default class MainSection extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { infor, change, onchange } = this.props
        const { display, value, UserInfo, style } = infor
        const adresses = UserInfo[0].Adress;
        var adress = adresses.map((adress, index) => {
            if (index === 0) {
                return (
                    <tr key={index}>
                        <td><strong>Address</strong>{adress}</td>
                    </tr>
                )
            } else {
                return (
                    <tr key={index}>
                        <td> <strong className="invi">  </strong>{adress}</td>
                    </tr>
                )
            }
        })
        return (
            <div className="mainsection">
                <h1>Personal UserInformation</h1>
                <div style={style} >

                    <input name="value" onChange={onchange} />
                    <button onClick={change}>Change</button>

                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td> <strong>First Name </strong>{UserInfo[0].FirstName}</td>
                                <td className="icon"><button onClick={this.props.clicked} value="FirstName"><i className='fas fa-pencil-alt' value="FirstName"></i></button></td>
                            </tr>
                            <tr>
                                <td> <strong>Last Name </strong>{UserInfo[0].LastName}</td>
                                <td className="icon"><button onClick={this.props.clicked} value="LastName"><i className='fas fa-pencil-alt' value="LastName"></i></button></td>
                            </tr>
                            <tr>
                                <td> <strong>User Name </strong>{UserInfo[0].UserName}</td>
                            </tr>
                            <tr>
                                <td> <strong>Phone No </strong>{UserInfo[0].PhoneNo}</td>
                                <td className="icon"><button onClick={this.props.clicked} value="PhoneNo"><i className='fas fa-pencil-alt' value="PhoneNo"></i></button></td>
                            </tr>
                            <tr>
                                <td> <strong>Email ID </strong> {UserInfo[0].Email}</td>
                                <td className="icon"><button onClick={this.props.clicked} value="Email"><i className='fas fa-pencil-alt' value="Email"></i></button></td>
                            </tr>
                            {adress}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
