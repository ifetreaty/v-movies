const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOThiYzJhY2E3ODA1NDVmYTM1MjJmMWM2YjIxZTgzOSIsInN1YiI6IjViMmViNzBlOTI1MTQxNmUwYzAwOGI3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FD7Zn0WI19d2fgO4r4-ZqzxtplKG10qjkfWl1BLHHc0";

const handler = (path, pathOptions = {}) => {
  const url = new URL(`${BASE_URL}${path}`);
  if (pathOptions) {
    for (const key in pathOptions) {
      url.searchParams.append(key, pathOptions[key]);
    }
  }
  return fetch({
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    method: "GET",
    url: url.toString(),
  });
};

export const getRecommended = async () => await handler(`trending/movie/week`);

export const getDiscover = async () => await handler(`discover/movie`);
