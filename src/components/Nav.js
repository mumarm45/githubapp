/**
 * Created by mumarm45 on 29/11/2018.
 */
import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Nav extends React.Component  {

    render() {
        return (
            <ul className="nav">
                <li>
                    <NavLink exact activeClassName='active' to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to='/battle'>
                        Battle
                    </NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName='active' to='/popular'>
                        Popular
                    </NavLink>
                </li>
            </ul>
        )
    }


}

export default Nav;