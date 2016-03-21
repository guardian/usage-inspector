import Rx from 'rx';
import Immutable from 'immutable';


const pageLength = 10;
const currentDate = moment().format('YYYY-MM-DD');
const usageDateFilter = 'usages@>added:' + currentDate;
const usagesPlatformFilter = 'usages@platform:digital';
const usagesStatusFilter = 'usages@status:pending';

const defaultQuery = [
  usageDateFilter,
  usagesPlatformFilter,
  usagesStatusFilter
].join(" ");

const defaultParams = Immutable.fromJS({
  env: "PROD",
  params: {
    length: pageLength,
    offset: 0,
    free: false,
    q: defaultQuery, 
    orderBy: '-usages.lastModified'
  }
});

const initalParams$ = Rx.Observable.just(defaultParams);
const params$ = new Rx.Subject();

const query$ = Rx.Observable
  .combineLatest(initalParams$, params$, (a,b) => a.mergeDeep(b))
  .map((map) => map.toJS());

function setPage(n) {
  const offset = n * pageLength;
  params$.onNext(Immutable.fromJS({ params: { offset }}))
}

export const Query = {
  query$,
  params$,
  setPage
}
