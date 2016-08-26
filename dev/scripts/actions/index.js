export const selectSong = (songId) => {
    console.log("You clicked on songId: ", songId);
    return {
        type: 'SONG_SELECTED',
        payload: songId
    }
};
