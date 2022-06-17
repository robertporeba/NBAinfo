import {API_KEY, COUNTRY_ID, LEAGUE_KEY} from '../constants/server';
import axios from '../utils/axios';

class StatsService {
  getTeams(): Promise<any> {
    return axios
      .get(`?met=Standings&APIkey=${API_KEY}&leagueId=${LEAGUE_KEY}`)
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
      .get(`?met=Leagues&APIkey=${API_KEY}&countryId=${COUNTRY_ID}`)
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
      .get(`?met=Teams&APIkey=${API_KEY}&leagueId=${LEAGUE_KEY}`)
      .then(response => {
        return Promise.resolve<any>(response.data.result);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
}

export default new StatsService();
