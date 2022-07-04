<template>
    <div class="wrapper">
        <div class="sign-in-flexbox">
            <div class="sign-in">
                <h4>Acesse sua conta</h4>
                <p>
                    é novo por aqui?
                    <router-link to="/cadastro"><strong>cadastre-se</strong></router-link>
                </p>
                <form class="form-inputs">
                    <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                    <simple-input v-model="event.password" label="senha" type="password" required></simple-input>
                    <button type="button" @click="login()" class="btn-submit"><span
                            class="btn-submit-text">entrar</span></button>
                </form>
            </div>

            <div class="pet-img">
                <img :src="catDogImage" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
import { assertDeclareExportAllDeclaration } from "@babel/types";

export default {
    components: { SimpleInput },
    data() {
        return {
            event: {
                email: "",
                password: "",
            },
            catDogImage: "assets/img/header-pet-na-cabine.png",
        };
    },



    methods: {
        validateEmail(email) {
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },

        async login() {
            if (this.event.email != "" && this.event.password != "" && this.validateEmail(this.event.email)) {
				try {
                    let req_body = JSON.stringify({
                            email: this.event.email,
                            password: this.event.password
                    });
                            
                    let resp = await fetch('http://localhost:3000/customers/authenticate', 
                    { 
                        method: 'POST', 
                        body: req_body,
                        headers: { 'Content-Type': 'application/json' }
                    });

                    if (resp.status === 201) { // Usuário autenticado no sistema
                        let user_data = await resp.json();
                        localStorage.user_token = user_data.token;
                        this.$router.push('/');
                        alert(`Seja bem vindo ${user_data.data.name}`);
                    } else if (resp.status === 400) { // Falha ao procurar usuário
                        alert('Falha na busca pelo cadastro, tente novamente')
                    } else if (resp.status === 404) { // Usuário não encontrado no sistema
                        alert('Cadastro não encontrado: usuário ou senha inválidos')
                    }

                } catch (e) {
                    console.log('Erro durante sign-in');
                }
            } else alert("Preencha os campos de Email e Senha");
        },
    },
};
</script>

<style scoped>
@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";


.sign-in-flexbox {
    width: 70%;
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: auto auto;
    flex-wrap: wrap;
}

.sign-in {
    margin: auto;
}

.sign-in p {
    margin-top: 12px;
    text-align: right;
    text-transform: lowercase;
    font-size: 14px;
    padding-right: 6%;
    padding-bottom: 10px;
}

.sign-in p a>strong {
    color: black;
    font-size: 16px;
}

.sign-in p a:hover {
    color: rgb(50, 49, 49);
}

.pet-img {
    margin: auto;
}

.pet-img img {
    width: 80%;
    min-width: 250px;
    display: block;
    margin: auto;
}
</style>