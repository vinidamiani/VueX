import { createStore } from 'vuex'

const store = createStore({
    state: {
        title: "Store do VueX",
        notas:[]
    },
    getters: {},
    mutations: {
        SALVAR_NOTA(state, titulo) {
            state.notas.push(titulo);
        }
    },
    actions: {}
})

export default store