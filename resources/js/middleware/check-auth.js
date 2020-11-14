export default async function check_auth({next, store}) {

    if (store.getters['auth/isLoggedIn']){
       await store.dispatch('auth/getUser');
    }

    return next();

}
