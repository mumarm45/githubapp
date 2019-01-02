/**
 * Created by mumarm45 on 09/12/2018.
 */

import PropTypes from "prop-types";
import React, {Component} from "react";

let PreviewPlayer = (props) => {

    return (
        <div className="column">
            <img className="avatar" src={props.avatar} alt={'Avatar for' + props.username}/>
            <h2 className="username">@{props.username}</h2>
            {props.children}
        </div>
    );
};
PreviewPlayer.protoType = {
    "avatar": PropTypes.string.isRequired,
    "username": PropTypes.string.isRequired,
};

export default PreviewPlayer;