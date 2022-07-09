import { createStore } from 'vuex'


export const store = createStore({
    state: { // Variáveis
        // Acessado por $store.state.{propriedade}
        user_authenticated: false
    },
    mutations: { // funções síncronas
        // decreaseCounter(state) { state.counter-- }
        // acessado por $store.commit('<nome da função : "decreaseCounter">')
        logout(state) {
            state.user_authenticated = false;
            localStorage.removeItem('user_token');
        },

        login(state, token) {
            state.user_authenticated = true;
            localStorage.setItem('user_token', token);
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
