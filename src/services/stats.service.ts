import axios from '../utils/axios';

const apiKey =
  'c812db3d2fc30b5d7b70ca334ffc9ecbdc70003a83cde9071836cbbe81e61c5e';
const countryID = '190'; //germany
const leagueKey = '757'; // bundesliga
class LiveGamesService {
  getTeams(): Promise<any> {
    return axios
      .get(`?met=Standings&APIkey=${apiKey}&leagueId=${leagueKey}`)
      .then(response => {
        return Promise.resolve<any>(response.data.result);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
  getLeague(): Promise<any> {
    return axios
      .get(`?met=Leagues&APIkey=${apiKey}&countryId=${countryID}`)
      .then(response => {
        return Promise.resolve<any>(response.data.result);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
  getTeamsLogo(): Promise<any> {
    return axios
      .get(`?met=Teams&APIkey=${apiKey}&leagueId=${leagueKey}`)
      .then(response => {
        return Promise.resolve<any>(response.data.result);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
}

export default new LiveGamesService();
