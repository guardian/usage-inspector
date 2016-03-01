import Rx from 'rx';

const env = "PROD"

const currentDate = moment().format('YYYY-MM-DD');

const usageDateFilter = 'usages@>added:' + currentDate;
const usagesPlatformFilter = 'usages@platform:digital';
const usagesStatusFilter = 'usages@status:pending';

const query = [
  usageDateFilter,
  usagesPlatformFilter,
  usagesStatusFilter
].join(" ");

export const Query = {
  query$: Rx.Observable.just({
    env: env,
    params: {
      length: 100,
      free: false,
      q: query, 
      orderBy: '-usages.lastModified'
    }
  })
}
