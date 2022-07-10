import { createStore } from 'vuex'


export const store = createStore({
    state: { // Variáveis
        // Acessado por $store.state.{propriedade}
        user_authenticated: false,
        is_admin: false
    },
    mutations: { // funções síncronas
        // decreaseCounter(state) { state.counter-- }
        // acessado por $store.commit('<nome da função : "decreaseCounter">')
        logout(state) {
            state.is_admin = false;
            state.user_authenticated = false;
            localStorage.removeItem('user_token');
        },

        login(state, obj) {
            state.is_admin = obj.is_admin;
            state.user_authenticated = true;
            localStorage.setItem('user_token', obj.token);
        }
    },
    actions: { // funções assíncronas
        // acessado por $store.dispatch('<nome da função : "decreaseCounter">')
        // requisição(url).then(response => { commit('mutação', valor) })
    },
    getters: {
        // acessado via $store.getters.{nome do getters}
    },
    modules: {

    }
})
