import axios from "axios";

import { moviesActions } from "./movies-slice";

export const fetchMoviesList = () => {
  const randomPage = Math.floor(Math.random() * 500 + 1);
  const fixedRandomPage = randomPage.toFixed(0);

  return async (dispatch) => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${fixedRandomPage}`,
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

      dispatch(moviesActions.setMovies(movies));
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchMovie = (id) => {
  return async (dispatch) => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
      return data;
    };

    try {
      const movie = await fetchMovieDetails();

      dispatch(moviesActions.setMovies(movie));
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
