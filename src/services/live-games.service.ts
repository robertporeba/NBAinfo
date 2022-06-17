import {API_KEY} from '../constants/server';
import axios from '../utils/axios';

class LiveGamesService {
  getLiveGames(): Promise<any> {
    return axios
      .get(`?met=Livescore&APIkey=${API_KEY}`)
      .then(response => {
        return Promise.resolve<any>(response.data);
      })
      .catch(err => {
        Promise.reject();
        console.log(err);
      });
  }
}

export default new LiveGamesService();
