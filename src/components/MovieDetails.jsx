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

  const genres = movies.genres;
  const languages = movies.spoken_languages;
  const production_companies = movies.production_companies;
  // console.log(movies);

  return (
    <div className={styles.detailsContainer}>
      {movies?.original_title ? (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`} />
          <h2>
            {movies.original_title}
            {movies.tagline ? " - " + movies.tagline : ""}
          </h2>
          <p>{movies.overview}</p>
          <p>Genres: {genres.map((g) => g.name).join(", ")}</p>
          <p>Movie Length: {movies.runtime} mins</p>
          <p>{movies.budget ? "Budget: " + movies.budget + " $" : " "} </p>
          <p>
            Spoken Languages: {languages.map((l) => l.english_name).join(", ")}
          </p>
          <p>
            Production Companies:{" "}
            {production_companies.map((p) => p.name).join(", ")}
          </p>
          <p>Release Date: {movies.release_date}</p>
          <p>
            {movies.vote_average.toFixed(1)}{" "}
            <span className={styles.star}>&#9733;</span>
          </p>
        </div>
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
