export const namespaced = true;

export const state = {
    memberships: {},
};
export const mutations = {
    setMemberships(state, payload) {
        state.memberships = payload
    },
    DELETE_MEMBERSHIP(state, payload) {
        state.memberships.data.splice(payload, 1);
    }
};


export const actions = {
    store(state, payload) {
        return payload.post('/api/admin/memberships')
    },
    getMembership({commit}, payload = 1) {
        axios.get(`/api/admin/memberships?page=${payload}`)
            .then(({data}) => {
                commit('setMemberships', data)
                window.history.replaceState('memberships','membership',`/admin/membership?page=${payload}`)
            })
    },

    deleteMembership({commit}, payload) {
        axios.delete(`/api/admin/memberships/${payload.id}`)
            .then(() => {
                commit('DELETE_MEMBERSHIP', payload.index)
            })
    },

    async get({state}, payload) {
        if (!_.isEmpty(state.memberships)) {
            let membership = state.memberships.data.find(membership => membership.id === payload);
            if (membership) {
                return membership;
            }
        }
        let {data} = await axios.get(`/api/admin/memberships/${payload}`);
        return data;
    },

    update({commit}, payload) {
        return payload.patch(`/api/admin/memberships/${payload.id}`,payload)

    }


};


