import { useSelector } from "react-redux";

import styles from "./MoviesList.module.css";
import MovieItem from "./MovieItem";

const MoviesList = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className={styles.moviesList}>
      {movies?.length !== 0 &&
        movies?.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            poster_path={movie.poster_path}
          />
        ))}
    </div>
  );
};

export default MoviesList;
