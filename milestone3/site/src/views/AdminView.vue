<template>
  <div class="wrapper">
    <div class="formulary" v-if="isAdmin">
      <div class="form-wrapper-flex">
        <form class="form-inputs">
          <h4>Gerenciar usuários</h4>
          <simple-input v-model="event.name" label="nome" type="text" required></simple-input>
          <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
          <simple-input v-model="event.cpf" label="cpf" type="text"
            pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" required></simple-input>
          <simple-input v-model="event.address" label="endereço" type="text" required></simple-input>
          <simple-input v-model="event.phone" label="telefone" type="tel" required></simple-input>
          <simple-input v-model="event.action" label="alterar/remover" type="text" required></simple-input>
          <button class="btn-submit" type="button" @click="handleCadastro()">
            atualizar usuário
          </button>
        </form>
        <form class="form-inputs">
          <h4>Gerenciar produtos</h4>
          <simple-input v-model="event.nameprd" label="nome do produto" type="text" required></simple-input>
          <simple-input v-model="event.number" label="número de identificação" type="number" min="0" required>
          </simple-input>
          <simple-input v-model="event.description" label="descrição" type="text" required></simple-input>
          <simple-input v-model="event.price" label="preço" type="number" min="0.00" max="10000.00" step="0.01"
            required></simple-input>
            <simple-input v-model="event.qtd" label="quantidade" type="number" min="0" max="1000" step="1"
            required></simple-input>
          <simple-input v-model="event.action2" label="alterar/adicionar/remover" type="text" required></simple-input>
          <button class="btn-submit" type="button" @click="handleProduto()">
            atualizar produto
          </button>
        </form>
      </div>
    </div>
    <div v-else class="login-admin">
      <h4>Faça login como administrador</h4>
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
        action: "",
        nameprd: "",
        number: "",
        description: "",
        price: "",
        action2: "",
        qtd: ""
      },
    };
  },
  methods: {
    isAdmin() {
      return this.$store.state.isAdmin && this.$store.state.isAuthenticated;
    },

    handleCadastro() {
      if (
        this.event.email !== "" &&
        this.event.password !== "" &&
        this.event.name !== "" &&
        this.event.cpf !== "" &&
        this.event.address !== "" &&
        this.event.phone !== "" &&
        this.event.update !== ""
      ) {
        let emailCPFFound = false;
        for (let i = 0; i < users.length; i++) {
          if (this.event.email == users[i]["email"] ||
            this.event.cpf == users[i]["cpf"]) {
            emailCPFFound = true;
            break;
          }
        }
        if (emailCPFFound) {
          alert("Dados alterados com sucesso!");
        }
        else {
          alert("Usuário não encontrado!");
        }
      }
      else
        alert("Preencha todos os campos!");
    },

    
    create: async function() {
        let productInfo = {
            name: this.event.nameprd,
            description: this.event.description,
            product_id: this.event.number,
            price: this.event.price,
            qtd: this.event.qtd,
        };

        try {
            let body = JSON.stringify(productInfo);
            let resp = await fetch(
                'http://localhost:3000/products/',
                {
                    method: 'POST',
                    body: body,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            if (resp.status === 200) {
                alert('Dado inserido')
            } else {
                alert('Falha na inserção do dado')
            } 
        } catch (e) {
            alert('Error: ' + e);
        }
    },
    
    remove: async function() {
        try {
            let resp = await fetch(`http://localhost:3000/products/${this.event.number}`, {method: 'DELETE'});  
            if (resp.status === 200) {
                alert('Dado removido')
            } else {
                alert('Falha na remoção do dado')
            }
        } catch(e) {
            alert('Error remove: ' + e);
        }
    },

    update: async function() {
        let productInfo = {
            name: this.event.nameprd,
            description: this.event.description,
            product_id: this.event.number,
            price: this.event.price,
            qtd: this.event.qtd,
        };

        try {
            let body = JSON.stringify(productInfo);
            let resp = await fetch(`http://localhost:3000/products/${this.event.number}`, {
                    method: 'PUT',
                    body: body,
                    headers: { 'Content-Type': 'application/json' },
                }); 

            if (resp.status === 200) {
                alert('Dado atualizado')
            } else {
                alert('Falha na atualização do dado')
            }
        } catch(e) {
            alert('Error update: ' + e);
        }
    },

    handleProduto() {
      if (
        this.event.nameprd !== "" &&
        this.event.number !== "" &&
        this.event.description !== "" &&
        this.event.price !== "" &&
        this.event.action2 !== ""
      ) {
        if (this.event.action2.toLowerCase() === 'alterar') {
            this.update();
        }

        else if (this.event.action2.toLowerCase() === 'remover') {
            this.remove();
        }

        else if (this.event.action2.toLowerCase() === 'adicionar') {
            this.create();
        }

        else {
            alert("Ação inválida!");
        }
      }
      else
        alert("Preencha todos os campos!");
    },
  },
};
</script>


<style>
@import "/public/assets/css/button.css";
@import "/public/assets/css/forms.css";

.form-inputs {
  margin-bottom: 20px;
}

.formulary {
  width: 80%;
  margin: auto auto;
}

.login-admin {
  margin: auto 0;
}

.form-wrapper-flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
}
</style>