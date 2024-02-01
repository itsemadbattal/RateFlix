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
    <div className={styles.detailsContainer}>
      {movies?.overview ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`} />
          <h1>{movies.title}</h1>
          <h3>{movies.overview}</h3>

          <div className={styles.footer}>
            <div className={styles.genres}>
              {movies.genres.map((g) => (
                <p key={g.id}>{g.name}</p>
              ))}
            </div>
            <p>{movies.release_date}</p>
          </div>
        </>
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

export default MovieDetails;
