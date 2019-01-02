/**
 * Created by mumarm45 on 29/11/2018.
 */
import React, {Component} from "react";
import {parse} from "query-string";
import {battle} from "../util/api";
import PlayerPreview from "./PlayerPreview";
import PropTypes from "prop-types";

let Player = (props) => {
    return (<div>
        <h3>{props.lable}</h3>
        <p>Score:{props.score}</p>
        <Profile info={props.profile}/>
    </div>)
};

Player.protoTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

let Profile = (props) => {
    let info = props.info;
    return (
        <PlayerPreview avatar={info.avatar_url} username={info.login}>
            <ul className="space-list-item">
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers : {info.followers}</li>
                <li>Following : {info.following}</li>
                <li>Public Post : {info.public_repos}</li>
                {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}

            </ul>
        </PlayerPreview>
    );
};
Profile.protoTypes = {
    info: PropTypes.string.isRequired
};

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        let players = parse(this.props.location.search);
        battle([players.playerOneName, players.playerTwoName]).then((result) => {
            if (result === null) {
                this.setState(() => {
                    return {
                        error: 'Check username',
                        loading: false,
                        winner: null,
                        loser: null
                    }
                });
            }
            this.setState(() => {
                return {
                    error: null,
                    loading: false,
                    winner: result[0],
                    loser: result[1]
                }
            });
        });
    }

    render() {
        let winner = this.state.winner;
        let loser = this.state.loser;
        let loading = this.state.loading;
        let error = this.state.error;
        if (loading === true) {
            return (<p>Loading...</p>)
        }

        if (error) {
            return (<div><p>error</p></div>)
        }

        return (
            <div className="row">
                <Player lable='Winner' score={winner.score} profile={winner.profile}/>
                <Player lable='Loser' score={loser.score} profile={loser.profile}/>
            </div>
        )
    }
}

export default  Result;