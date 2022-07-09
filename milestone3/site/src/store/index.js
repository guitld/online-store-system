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

        login(state, user_data) {
            state.user_authenticated = true;
            localStorage.setItem('user_token', user_data.token);
            console.log("token", user_data.token)
            state.is_admin = user_data.data.is_admin;
            console.log(state.is_admin)
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
