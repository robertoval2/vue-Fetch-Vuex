// store.js

import { createStore } from 'vuex';
import counter from './modules/counter';
import users from './modules/users';

export default createStore({
  modules: {
    counter,
    users,
  },
});
