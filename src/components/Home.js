/**
 * Created by mumarm45 on 29/11/2018.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <h1>Git Battle</h1>
                <Link className="button" to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

export default Home;