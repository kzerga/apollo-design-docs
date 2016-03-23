/**
 * Created by chetanv on 04/11/15.
 */

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import createHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import useQueries from 'history/lib/useQueries';

const location = useQueries(canUseDOM ? createHistory : createMemoryHistory)();

export default location;