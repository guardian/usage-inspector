import Rx from 'rx';
import Ractive from 'ractive';

import {Result} from '../lib/result.js';
import {Query} from '../lib/query.js';


var ractive = new Ractive({
  el: '#container',
  template: '#template',
  data: { page: 0, rows: [] }
});

const result$ = Result.result$;

ractive.observe('page', (n) => Query.setPage(n)); 
result$.subscribe((r) => ractive.set('rows', r));

Query.setPage(0);
