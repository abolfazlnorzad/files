export default function admin({next, store}) {
    if (store.getters['auth/user'].isAdmin) {
        return next();
    }
    return next({name: 'access-denied'});
}
