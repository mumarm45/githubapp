/**
 * Created by mumarm45 on 29/11/2018.
 */
import React, {Component} from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null,
        };

        this.handelSubmit = this.handelSubmit.bind(this);
        this.onResetHandler = this.onResetHandler.bind(this);
    }


    handelSubmit(id, username) {
        this.setState(() => {
            let newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = `https://github.com/${username}.png`;
            return newState;
        })

    }

    onResetHandler(id) {
        this.setState(() => {
            let newState = {};
            newState[id + 'Name'] = '';
            newState[id + 'Image'] = null;
            return newState;
        });
    }

    render() {
        let match = this.props.match;
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;
        let playerTwoImage = this.state.playerTwoImage;
        let playerOneImage = this.state.playerOneImage;
        return (
            <div className="row">
                {!playerOneName && <PlayerInput
                    id='playerOne'
                    label="Player One"
                    onSubmit={this.handelSubmit}
                />}
                {playerOneImage !== null && <PlayerPreview
                    avatar={playerOneImage}
                    username={playerOneName}
                >
                    <button className="reset" onClick={this.onResetHandler.bind(null, 'playerOne')}>reset</button>
                </PlayerPreview>}
                {!playerTwoName && <PlayerInput
                    id='playerTwo'
                    label="Player Two"
                    onSubmit={this.handelSubmit}
                />}
                {playerTwoImage !== null && <PlayerPreview
                    avatar={playerTwoImage}
                    username={playerTwoName}
                ><button className="reset" onClick={this.onResetHandler.bind(null, 'playerTwo')}>reset</button></PlayerPreview>}

                {playerOneImage && playerTwoImage &&
                <Link className="button" to={{
                    pathname: match.url + '/results',
                    search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                }}>

                    Battle
                </Link>}
            </div>
        )
    }
}

export default Battle;