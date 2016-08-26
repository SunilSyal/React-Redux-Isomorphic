import {combineReducers} from 'redux';
import selectedSongID from './reducerSelectedSongID';
import Songs from './reducerSongs';

// Combine reducers here

const allReducers = combineReducers({
    selectedSongID: selectedSongID,
    songs: Songs
});

export default allReducers
