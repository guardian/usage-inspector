import Rx from 'rx';
import {MediaApi} from './media-api.js'


const env = "PROD"
const search$ = MediaApi.search(env)

export const Query = {
  result$: search$.map((result) => {
    console.log(result);
    return result;
  })
} 
