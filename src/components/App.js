import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
/*import Genrepage from './Genrepage';
import Homepage from './Homepage';
import Moviepage from './Moviepage';*/
import { Homepage, Moviepage, Genrepage, SingleMoviePage} from './';
import Button from '@mui/material/Button'//mui version of Button
/* 
    This is you entry point for your routes
*/

/**
 * 
 * @returns homepage/moviepage/genrepage
 */
const App = () => {
    return (
        <div>
            <div>
                <Link to={'/'}>
                    <Button variant = 'contained'>Home</Button>
                </Link>
                <Link to={'/movies'}>
                    <Button variant = 'contained'>Movies</Button>
                </Link>
                <Link to={'/genres'}>
                    <Button variant = 'contained'>Genres</Button>
                </Link>
            </div>

            <Routes>
                <Route path="/genres" element={<Genrepage />} />
                <Route path="/movies" element={<Moviepage />} />
                <Route path="/movies/:movieid" element={<SingleMoviePage />} />
                
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
};

export default App;