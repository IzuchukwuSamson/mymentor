import { createStore } from 'vuex'

import authModule from './modules/authModule/authIndex'
import mentorsModule from './modules/mentors/index.js'
import requestModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        auth: authModule,
        mentors: mentorsModule,
        requests: requestModule
    }
    // state() {
    //     return {
    //         userId: 'c3'
    //     }
    // },
    // getters: {
    //     userId(state) {
    //         return state.userId
    //     }
    // }
})

export default store