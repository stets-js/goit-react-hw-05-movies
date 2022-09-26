import { useParams } from "react-router-dom";


const MovieDetail = () => {
    const {movieId} = useParams();
    return <h1>{movieId}</h1>
}

export default MovieDetail