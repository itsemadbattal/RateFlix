import { useNavigate } from "react-router-dom";

import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
} from "semantic-ui-react";

import styles from "./MovieItem.module.css";

const MovieItem = (props) => {
  const navigate = useNavigate();

  const navigateToMovieDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Card
      className={styles.movieContainer}
      onClick={() => navigateToMovieDetails(props.id)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
        wrapped
        fluid
        ui={false}
      />
      <CardContent>
        <CardHeader>{props.title}</CardHeader>
        <CardDescription>
          {props.overview.slice(0, 150) + "..."}
        </CardDescription>
      </CardContent>
      <CardContent className={styles.footer} extra>
        <CardMeta className={styles.rating}>
          <span>
            {props.vote_average.toFixed(1)}{" "}
            <span className={styles.star}>&#9733;</span>
          </span>
        </CardMeta>
        <CardMeta>
          <span>{props.release_date}</span>
        </CardMeta>
      </CardContent>
    </Card>
  );
};

export default MovieItem;
