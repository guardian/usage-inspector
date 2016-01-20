import {h} from '@cycle/dom';
import Rx from 'rx';

import {Query} from '../lib/query.js';


export const TableComponent = () => {
  const result$ = Query.result$ 

  function view() {
    return result$.map((result) => {
      const items = [
        h('tr', [
            h('td', result.foo),
            h('td', 'foob')
        ])
      ]; 

      const headings = [
        h('tr', [
            h('th', 'foo'),
            h('th', 'bar')
        ])
      ];

      return h('table', headings.concat(items));
    })
  }

  const vtree$ = view();

  return {
    DOM: vtree$,
  };
}
