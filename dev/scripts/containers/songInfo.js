import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongInfo extends Component {
    render() {
        if (!this.props.selectedSongID) {
            return (<div>Select a song...</div>);
        }

        var selectedSong = null;

        for(var i in this.props.songs){
          if (this.props.songs[i].id == this.props.selectedSongID) {
            selectedSong = this.props.songs[i];
            break;
          }
        }

        return (
            <div>
                <h2>Playing now: {selectedSong.title}</h2>
                <iframe width="560" height="315" src={selectedSong.link + "?autoplay=1"} ></iframe>
                <h3>Composer - {selectedSong.composer}</h3>
            </div>
        );
    }
}

function fetchMyProps(state) {
    return {
        selectedSongID: state.selectedSongID,
        songs: state.songs
    };
}

export default connect(fetchMyProps)(SongInfo);
