import objectToFormData from "object-to-formdata";

export const namespaced = true;

export const state = {
    files: {}
};
export const mutations = {
    setFile(state, payload) {
        state.files = payload
    },
    deleteFile(state,index){
        state.files.data.splice(index,1)
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
    getFiles({commit},queries) {
        axios.get(`/api/admin/file`,{params:queries})
            .then(({data}) => {
                commit('setFile', data)
                window.history.pushState('files', 'FILES', `/admin/file?${data.meta.queries}`)
            })
    },
    deleteFile({commit}, payload) {
        axios.delete(`/api/admin/file/${payload.slug}`)
            .then(() => {
                commit('deleteFile',payload.index)
                swal.success('فایل به درستی حذف شد.');
            })
    }
};
