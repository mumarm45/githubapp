/**
 * Created by mumarm45 on 26/11/2018.
 */

import axios from "axios";


let id = 'mumarm45@gmail.com';
let secret_Key = 'ef31776a8d14b1e67f0d53c19a466d49e6bd1842';
let params = `?client=${id}&client_secret=${secret_Key}`;

let getProfile = (username) => {
    return axios.get(`https://api.github.com/users/${username}${params}`).then((user) => user.data);
};

let getRepo = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`).then((user) => user.data);
};

export let fetchPopularRepository = (language) => {
    let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return axios.get(encodedURI).then(res => res.data.items);
};

let getStarCount = (repos) => {
    return repos.reduce((count, resp) => {
        return count + resp.stargazers_count;
    }, 0)
};

let calculateScore = (profile, repos) => {
    return (profile.followers * 3) + getStarCount(repos);
};
let getUserData = (player) => {
  return  axios.all([
        getProfile(player), getRepo(player)
    ]).then((data) => {
        let profile = data[0];
        let score = calculateScore(profile, data[1]);
        return {
            profile: data[0],
            score: score
        }
    });
};
let sortPlayer = (players) => {
    return players.sort((a, b) => b.score - a.score);
};
export let battle = (players) => {
  return  axios.all(players.map(getUserData)).then(sortPlayer).catch((err) => {
        return null;
    });
};