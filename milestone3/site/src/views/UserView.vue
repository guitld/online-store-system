<template>
    <div class="wrapper">
        <div class="formulary">
            <h4>Alterar perfil</h4>
            <form class="form-inputs">
                <simple-input v-model="event.name" label="nome" type="text" required></simple-input>
                <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                <simple-input v-model="event.cpf" label="cpf" type="text"
                    pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required>
                </simple-input>
                <simple-input v-model="event.address" label="endereço" type="text" required></simple-input>
                <simple-input v-model="event.phone" label="telefone" type="tel" required></simple-input>
                <simple-input v-model="event.password" label="senha" type="password" required></simple-input>
                <button class="btn-submit" type="button" @click="updateProfile()">
                    alterar cadastro
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
export default {
    components: { SimpleInput },
    data() {
        return {
            event: {
                name: "",
                email: "",
                cpf: "",
                address: "",
                phone: "",
                password: "",
            },
        };
    },
    created() {
        if (!this.$store.state.user_authenticated) {
            this.$router.push("/login");
            alert("Faça o login para acessar esta página");
        }
    },
    methods: {
        async updateProfile() {
            if (
                this.event.email !== "" &&
                this.event.password !== "" &&
                this.event.name !== "" &&
                this.event.cpf !== "" &&
                this.event.address !== "" &&
                this.event.phone !== "" &&
                this.event.password !== ""
            ) {
                try {
                    let req_body = JSON.stringify({
                        email: this.event.email,
                        password: this.event.password,
                        name: this.event.name,
                        cpf: this.event.cpf,
                        address: this.event.address,
                        phone: this.event.phone,
                    });

                    let resp = await fetch(
                        "http://localhost:3000/customers/update-customer",
                        {
                            method: "PUT",
                            body: req_body,
                            headers: {
                                "x-access-token": localStorage.user_token,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    if (resp.status === 200) {
                        let user_name = await resp.json()
                        alert(`Dados alterados com sucesso, ${user_name.data}!`)
                    } else if (resp.status === 400) {
                        alert("Este email e/ou CPF já está sendo utilizado por outro usuário.")
                    }
                } catch (e) {
                    console.log("Erro durante a atualização: " + e);
                }
            } else alert("Preencha todos os campos.");
        },
    },
};
</script>


<style>
@import "/public/assets/css/forms.css";
@import "/public/assets/css/button.css";

.btn-submit {
    width: 150px;
}
</style>