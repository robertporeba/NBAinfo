export default function useHistory() {
  const isFirstTeamWinner = (score: string) => {
    const result = score.split('-');

    if (Number(result[0]) > Number(result[1])) {
      return true;
    } else {
      return false;
    }
  };

  const getTeamScore = (score: string, position: number) => {
    const result = score.split('-');

    if (position === 1) {
      return result[0];
    } else {
      return result[1];
    }
  };

  return {isFirstTeamWinner, getTeamScore};
}
