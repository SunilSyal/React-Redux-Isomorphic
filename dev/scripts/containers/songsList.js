import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectSong} from '../actions/index'


class SongsList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <li
                    key={song.id}
                    onClick={() => this.props.selectSong(song.id)}
                >
                    {song.id} : {song.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function fetchMyProps(state) {
    return {
        songs: state.songs
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectSong: selectSong}, dispatch);
}

export default connect(fetchMyProps, matchDispatchToProps)(SongsList);
