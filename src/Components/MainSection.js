import React, { Component } from 'react'
import ReactPencil from 'react-pencil'

export default class MainSection extends Component {
    render() {
        const { info } = this.props
        const adresses = info[0].Adress;
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
                <h1>Personal Information</h1>
                <ReactPencil value={info[0].FirstName}/>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td> <strong>First Name: </strong>{info[0].FirstName}</td>
                                <td className="icon"><i className='fas fa-pencil-alt'></i></td>
                            </tr>
                            <tr>
                                <td> <strong>Last Name: </strong>{info[0].LastName}</td>
                                <td className="icon"><i className='fas fa-pencil-alt'></i></td>
                            </tr>
                            <tr>
                                <td> <strong>User Name: </strong>{info[0].UserName}</td>
                            </tr>
                            <tr>
                                <td> <strong>Phone No: </strong>{info[0].PhoneNo}</td>
                                <td className="icon"><i className='fas fa-pencil-alt'></i></td>
                            </tr>
                            <tr>
                                <td> <strong>Email ID: </strong> {info[0].Email}</td>
                                <td className="icon"><i className='fas fa-pencil-alt'></i></td>
                            </tr>
                            {adress}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
