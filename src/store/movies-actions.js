import axios from "axios";

import { moviesActions } from "./movies-slice";

export const fetchMoviesList = () => {
  return async (dispatch) => {
    const fetchMovies = async () => {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_API_READ_ACCESS_TOKEN_TMDB
            }`,
          },
        }
      );

      if (res.status !== 200) {
        throw new Error();
      }
      const data = await res.data;

      return data.results;
    };

    try {
      const movies = await fetchMovies();
      console.log(movies);
      dispatch(moviesActions.setMovies(movies));
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchForAMovie = (searchParam) => {
  return async (dispatch) => {
    const fetchSearchedMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchParam}&api_key=${
          import.meta.env.VITE_API_KEY_TMDB
        }`,
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_API_READ_ACCESS_TOKEN_TMDB
            }`,
          },
        }
      );
      if (res.status !== 200) {
        throw new Error();
      }
      console.log("Full Response:", res);
      console.log("Response Data:", res.data);

      const data = await res.data;

      return data.results;
    };
    try {
      const movies = await fetchSearchedMovies();
      dispatch(moviesActions.setMovies(movies));
    } catch (err) {
      console.log(err);
    }
  };
};
