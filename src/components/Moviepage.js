import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setList } from '../store/moviesSlice';
import Moviecard from './Moviecard';

const Moviepage = () => {
    const movies = useSelector(state => state.movies.list)
    const dispatch = useDispatch();
 
    const fetchMovies = async () => {
        const movies = await axios.get('/api/movies')
        dispatch(setList(movies.data))
    }

    useEffect(() => {
        fetchMovies();
    }, [])
    
    return (
        <div>
            <h1>Movies Page</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: "10px"
            }}>
            {
                movies.map(movie => {
                    return <Moviecard key={movie.id} movie={movie}/>
                })
                }
            </div>
        </div>
    );
};

export default Moviepage;