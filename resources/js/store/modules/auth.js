import axios from "../../plugin/axios";

export const namespaced = true;

export const state = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token')
};
export const getters = {
    user(state) {
        return state.user
    },
    token(state) {
        return state.token
    },
    isLoggedIn(state) {
        return state.isLoggedIn
    }
};

export const mutations = {
    SET_USER(state, user) {
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;
        state.isLoggedIn = true;
    },
    SET_TOKEN(state, token) {
        localStorage.setItem('token', token);
        state.token = token;
    },

    LOGOUT_USER(state){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.user=null;
        state.token=null;
        state.isLoggedIn=false;
    }

};

export const actions = {
    login({commit}, form) {
       return axios.post('/api/login', form)
            .then(({data}) => {
                commit('SET_USER', data.data)
                commit('SET_TOKEN', data.data.token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
            })
    },
    logout({commit}){
        commit('LOGOUT_USER');
    },

    register({commit}, form) {
       return  axios.post('/api/register', form)
            .then(({data}) => {
                commit('SET_USER', data.data)
                commit('SET_TOKEN', data.data.token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token;
            })
    },

    getUser({commit},form){
        return axios.get('/api/me',form)
            .then(({data})=>{
                commit('SET_USER',data)
            })
            .catch(()=>{
                commit('LOGOUT_USER')
            })

    }


};

