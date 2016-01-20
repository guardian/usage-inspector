import Rx from 'rx';

import {Client} from 'theseus';
import {Http} from 'any-http-reqwest';

import apiUriByEnv from '../config/media-api.js';


const client = new Client({
    promise: Promise,
    http: new Http({
        withCredentials: true
    })
});

export const MediaApi = {
  search: function search(env) {
    const apiUrl = apiUriByEnv[env];
    const api = client.resource(apiUrl);

    return Rx.Observable.fromPromise(
      api.follow('search').get({}, {withCredentials: true})
    );
  }
};
