import { createStore } from 'vuex'

const store = createStore({
    state: {
        title: "Store do VueX",
        notas:[]
    },
    getters: {
        totalNotas(state) {
            return state.notas.length;
        }
    },
    mutations: {
        SALVAR_NOTA(state, titulo) {
            state.notas.push(titulo);
        }
    },
    actions: {
        salvarNota({ commit }, titulo) {
            commit('SALVAR_NOTA', titulo);
        }
    }
})

export default store