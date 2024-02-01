import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMoviesList } from "../store/movies-actions";

import styles from "./MoviesList.module.css";
import MovieItem from "./MovieItem";

import { Dimmer, Loader } from "semantic-ui-react";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);

  return (
    <div className={styles.moviesList}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
            id={movie.id}
          />
        ))
      ) : (
        <div className={styles.loader}>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
