import React, {Component} from "react";
import "./App.css";
import PropTypes from "prop-types";
import {fetchPopularRepository} from "../util/api";

let SelectLanguage = (props) => {
    let languages = ['ALL', 'JAVA', 'JAVASCRIPT'];
    return (
        <ul className="languages">
            {
                languages.map(
                    (lang) => {
                        return (
                            <li style={lang === props.selectedLanguage ? {color: 'red'} : null }
                                onClick={props.onSelect.bind(null, lang)}
                                key={lang}>{lang}</li>
                        )

                    })
            }

        </ul>
    );
};

let RepoGrid = (props) => {
    return (
        <ul className="pros-list">
            {props.repo.map((re, idx) => {
                return (
                    <li className="prop-item">
                        <div className="">#{idx + 1}</div>
                        <ul className="space-list-item">
                            <li>
                                <img className="avatar"
                                     src={re.owner.avatar_url}
                                     alt={'Avatar for' + re.owner.login}/>
                            </li>
                            <li>
                                <a href={re.html_url}>{re.name}</a>
                            </li>
                            <li>@{re.owner.login}</li>
                            <li>{re.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}

        </ul>
    );
};
RepoGrid.prototype = {
    "repo": PropTypes.array.isRequired
};
SelectLanguage.prototype = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};
class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'ALL',
            repositories: null
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repositories: null
            }
        });

        fetchPopularRepository(lang).then(response => {
            this.setState(() => {
                return {
                    repositories: response
                }
            })
        });
    }

    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>;
                {!this.state.repositories ? <p>Loading....</p> : <RepoGrid repo={this.state.repositories}/>}
            </div>
        );


    }
}

export default Popular;