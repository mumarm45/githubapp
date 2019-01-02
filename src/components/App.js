import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Popular from "./Popular";
import Battle from "./Battle";
import Result from "./Result";
import store from '../store/Todostore'
class App extends Component {
    render() {
        let stor = this.props.store;
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/popular' component={Popular}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route path='/battle/results' component={Result}/>
                        <Route render={() => <p>Not Found</p>}/>
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default App;