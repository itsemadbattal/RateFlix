import MovieDetails from "../components/MovieDetails";
import { useParams } from "react-router-dom";
const MovieDetailPage = () => {
  const { id } = useParams();

  return <MovieDetails id={id} />;
};

export default MovieDetailPage;
