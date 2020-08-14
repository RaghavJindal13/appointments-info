import React, { Component } from 'react'
import InputForm from './Components/InputForm'
import Navbar from './Components/Navbar.js';
import Footer from './Components/footer.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Myappointments from './Components/Myappointments';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                
                <Router>
                    
                    
                        <Navbar />
                      
                        <Switch>
                        <Route path="/" exact component={InputForm} />
                            <Route path="/Myaccount" exact component={InputForm} />
                            
                            <Route path="/Myappointments" component={Myappointments} />
                            
                        
                        </Switch>
                        <Footer />
                   
                </Router>
              
               
            </div>
        )
    }
}

export default App
