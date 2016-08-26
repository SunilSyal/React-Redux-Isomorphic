import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { App } from './dev/scripts/components/App';

export default () => {

  return (
    <Route path="/" component={App}>

      <Route path="playFile" component={App}/>
      <Route path="playFile/:fileID" component={App}/>

      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
