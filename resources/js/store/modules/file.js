import objectToFormData from "object-to-formdata";

export const namespaced = true;

export const state = {
    files: {}
};
export const mutations = {
    setFile(state, payload) {
        state.files = payload
    },
    deleteFile(state, index) {
        state.files.data.splice(index, 1)
    }
};

export const actions = {

    store({commit}, payload) {
        return payload.submit('post', '/api/admin/file', {
            transformRequest: [function (data, header) {
                return objectToFormData(data)
            }]
        })
    },
    getFiles({commit}, queries) {
        return axios.get(`/api/admin/file`, {params: queries})
            .then(({data}) => {
                commit('setFile', data)
                window.history.pushState('files', 'FILES', `/admin/file?${data.meta.queries}`)
            })
    },
    getPublicFiles({commit},queries){
        return axios.get(`/api/file`, {params: queries})
            .then(({data}) => {
                commit('setFile', data)
            })
    },
    deleteFile({commit}, payload) {
        axios.delete(`/api/admin/file/${payload.slug}`)
            .then(() => {
                commit('deleteFile', payload.index)
                swal.success('فایل به درستی حذف شد.');
            })
    },
    async get({ state }, slug) {
        // if (! _.isEmpty(state.files)) {
        //     let file = state.files.data.find(file => file.slug === slug);
        //     if (file) {
        //         return file;
        //     }
        // }
        let { data } = await axios.get('/api/admin/file/' + slug);
        return data;
    },
    update({commit},form){
        return form.submit('post', `/api/admin/file/${form.slug}`, {
            transformRequest: [function (data, header) {
                return objectToFormData(data)
            }]
        })
    }
};
