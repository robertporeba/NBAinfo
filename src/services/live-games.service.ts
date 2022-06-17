import axios from '../utils/axios';

const apiKey =
  'c812db3d2fc30b5d7b70ca334ffc9ecbdc70003a83cde9071836cbbe81e61c5e';
const countryID = '190'; //germany
const leagueKey = '757'; // bundesliga
class LiveGamesService {
  getLiveGames(): Promise<any> {
    return axios
      .get(`?met=Livescore&APIkey=${apiKey}`)
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
