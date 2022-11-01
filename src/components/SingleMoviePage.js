
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleMoviePage = () => {
    const [selectedMovie, setSelectedMovie] = useState({});  
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const { movieid } = useParams();

    const fetchMoviesInfo = async () => {
        try {
            setLoading(true);
            const movie = await axios.get(`/api/movies/${movieid}`);
            setSelectedMovie(movie.data)
            setLoading(false);
        }
        catch (error) {
            setHasError(true);
        }
        
    }
    useEffect(() => {
        fetchMoviesInfo();
    }, []);

    //need to tell it what to do when no info yet
    if(hasError) return <h1>Something broke!</h1>
    if (loading) return <CircularProgress />
    
    return (
        <div>
            <h1>{selectedMovie.name}</h1>
            
            <h1>{selectedMovie.runtime}</h1>
            
        </div>
    );
};

export default SingleMoviePage;