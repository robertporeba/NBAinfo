import axios from '../utils/axios';

class LiveGamesService {
  getTestData(): Promise<any> {
    return axios
      .get('breeds/image/random')
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
