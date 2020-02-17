import Vuex from 'vuex'
import MODULE_AUTH from './user/auth';
import MODULE_LOADING from './loading/loading';
const createStore = () => {
    return new Vuex.Store({
        state: {},
        mutations: {},
        namespaced: true,
        modules: {
            MODULE_AUTH,
            MODULE_LOADING
        }
    })
}
export default createStore