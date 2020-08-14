import React, { Component } from 'react';
import ReactPencil from 'react-pencil';
import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import './Calender.scss';

export default class MainSection extends Component {
    state = {
        date: new Date(2018, 6, 1)
    }
    render() {
        
        const { info } = this.props
        let calendar = <Calendar  value={this.state.date} className="react-calendar"/>
     
        return (
           
            <div className="mainsection">
                <h1>Appointments</h1>
                {calendar}    
                    <div >
                    <table>
                        <tbody>
                            <tr>
                                <td> <strong>Appointment at: </strong>{info[0].Appointment}</td>
                                
                            </tr>
                            <tr>
                                <td> <strong>Appointment Time: </strong>{info[0].Time}</td>
                                
                            </tr>
                            <tr>
                                <td> <strong>Number of Persons: </strong>{info[0].numberofpersons}</td>
                            </tr>
                            <tr>
                                <td> <strong>Description: </strong>{info[0].Description}</td>
                                
                            </tr>
               
                        </tbody>
                    </table>
                    <button className="button">Cancel</button>
                </div>

            </div>
       
        )
    }
}
