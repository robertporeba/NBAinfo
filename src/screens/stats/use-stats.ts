export default function useStats() {
  const getLogo = (id: string, teamsLogo: any) => {
    const logo: any = teamsLogo.filter((x: any) => x.team_key === id);
    return logo[0] ? logo[0].team_logo : '';
  };

  return {getLogo};
}
