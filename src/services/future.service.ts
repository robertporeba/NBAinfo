import {API_KEY, LEAGUE_KEY} from '../constants/server';
import axios from '../utils/axios';

const FROM = '2022-06-16';
const TO = '2022-06-30';

class FutureService {
  getFutureGames(): Promise<any> {
    return axios
      .get(
        `?met=Fixtures&APIkey=${API_KEY}&leagueId=${LEAGUE_KEY}&from=${FROM}&to=${TO}`,
      )
      .then(response => {
        return Promise.resolve<any>(response.data.result);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
}

export default new FutureService();
