import axios from "@/plugin/axios";

export const namespaced = true;


export const mutations = {};

export const actions = {

    store({commit}, payload) {
        return payload.post('/api/admin/categories', payload);
    },
    get(state, payload) {
        return axios.get(`/api/admin/categories/${payload}`);
    },
    update({commit}, payload) {
        return payload.patch(`/api/admin/categories/${payload.slug}`, payload);
    }


};
