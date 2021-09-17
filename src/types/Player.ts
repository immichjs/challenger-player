export type Entries = {
  summonerId: string,
  summonerName: string,
  leaguePoints: number,
  rank: string,
  wins: number,
  losses: number,
  veteran: boolean,
  inactive: boolean,
  freshBlood: boolean,
  hotStreak: boolean
}

export type State = {
  challengers: Entries[]
}
