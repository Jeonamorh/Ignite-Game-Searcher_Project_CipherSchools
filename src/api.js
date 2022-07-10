const base_url = "https://api.rawg.io/api/";

const getMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const year = new Date().getFullYear();

const currentMonth = getMonth();
const currentDay = getDay();

const currentDate = `${year}-${currentMonth}-${currentDay}`;
const nextYear = `${year + 1}-${currentMonth}-${currentDay}`;

const lastYear = `${year - 1}-${currentMonth}-${currentDay}`;

//popular games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () => {
  return `
  ${base_url}${popular_games}`;
};
export const upcomingGamesURL = () => {
  return `
  ${base_url}${upcoming_games}`;
};
export const newGamesURL = () => {
  return `
  ${base_url}${new_games}`;
};

//load details

export const getLoadDetailsURL = (id) => {
  return `${base_url}games/${id}`;
};
export const getScreenShotURL = (id) => {
  return `${base_url}games/${id}/screenshots`;
};

export const searchGameURL = (game_name) => {
  return `${base_url}games?search=${game_name}&page_size=9`;
};
