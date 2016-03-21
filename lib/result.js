import Rx from 'rx';
import {MediaApi} from './media-api.js'
import {Query} from './query.js'


const search$ = Query.query$.flatMap((q) => MediaApi.search(q.env, q.params));
const result$ = search$.map((r) => r.data.map((i) => i.data));

export const Result = { result$ }; 
