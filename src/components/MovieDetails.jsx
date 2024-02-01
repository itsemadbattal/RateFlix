import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMovie } from "../store/movies-actions";

import { Dimmer, Loader } from "semantic-ui-react";

import styles from "./MovieDetails.module.css";

const MovieDetails = ({ id }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return (
    <>
      {movies?.overview ? (
        <div>
          <h1>{movies.overview}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`} />
        </div>
      ) : (
        <div className={styles.loader}>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
