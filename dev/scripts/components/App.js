import React, {Component} from 'react';
import SongsList from '../containers/songsList';
import SongInfo from '../containers/songInfo';

export default class App extends Component {

  render() {
      return (
        <div>
            <h2>Select a song</h2>
            <SongsList />
            <SongInfo />
        </div>
      );
  }
}
