<template>
<<<<<<< HEAD
  <div class="wrapper">
    <div class="formulary" v-if="isAdmin">
      <div class="form-wrapper-flex">
        <form class="form-inputs">
          <h4>Gerenciar usuários</h4>
          <simple-input
            v-model="event.email"
            label="e-mail"
            type="email"
            required
          ></simple-input>
          <simple-input
            v-model="event.action"
            label="alterar/remover"
            type="text"
            required
          ></simple-input>
          <div class="user-type-choice">
            <span class="user-type-label">tipo do usuário:</span>

            <div class="user-type-checkbox-container">
              <input
                class="user-type-checkbox"
                type="radio"
                name="tipo-usuario"
                value="Cliente"
                checked="checked"
                v-model="typeUser"
                id="cliente"
              /><span for="cliente">Cliente</span>
            </div>
            <div class="user-type-checkbox-container">
              <input
                class="user-type-checkbox"
                type="radio"
                name="tipo-usuario"
                value="Admin"
                v-model="typeUser"
                id="admin"
              /><span for="admin">Admin</span>
            </div>
          </div>
          <button class="btn-submit" type="button" @click="handleCadastro()">
            atualizar usuário
          </button>
        </form>
        <form class="form-inputs">
          <h4>Gerenciar produtos</h4>
          <simple-input
            v-model="event.nameprd"
            label="nome do produto"
            type="text"
            required
          ></simple-input>
          <simple-input
            v-model="event.number"
            label="número de identificação"
            type="number"
            min="0"
            required
          >
          </simple-input>
          <simple-input
            v-model="event.description"
            label="descrição"
            type="text"
            required
          ></simple-input>
          <simple-input
            v-model="event.price"
            label="preço"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            required
          ></simple-input>
          <simple-input
            v-model="event.qtd"
            label="quantidade"
            type="number"
            min="0"
            max="1000"
            step="1"
            required
          ></simple-input>
          <simple-input
            v-model="event.action2"
            label="alterar/adicionar/remover"
            type="text"
            required
          ></simple-input>
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
=======
    <div class="wrapper">
        <div class="formulary" v-if="isAdmin()">
            <div class="form-wrapper-flex">
                <form class="form-inputs">
                    <h4>Gerenciar usuários</h4>
                    <simple-input v-model="event.email" label="e-mail" type="email" required></simple-input>
                    <simple-input v-model="event.action" label="alterar/remover" type="text" required></simple-input>
                    <div class="user-type-choice">
                        <span class="user-type-label">tipo do usuário:</span>

                        <div class="user-type-checkbox-container">
                            <input class="user-type-checkbox" type="radio" name="tipo-usuario" value="Cliente"
                                checked="checked" v-model="typeUser" id="cliente" /><span for="cliente">Cliente</span>
                        </div>
                        <div class="user-type-checkbox-container">
                            <input class="user-type-checkbox" type="radio" name="tipo-usuario" value="Admin"
                                v-model="typeUser" id="admin" /><span for="admin">Admin</span>
                        </div>
                    </div>
                    <button class="btn-submit" type="button" @click="handleCadastro()">
                        atualizar usuário
                    </button>
                </form>
                <form class="form-inputs">
                    <h4>Gerenciar produtos</h4>
                    <simple-input v-model="event.nameprd" label="nome do produto" type="text" required></simple-input>
                    <simple-input v-model="event.slug" label="slug do produto" type="text" required></simple-input>
                    <simple-input v-model="event.description" label="descrição" type="text" required></simple-input>
                    <simple-input v-model="event.price" label="preço" type="number" min="0.00" max="10000.00" step="0.01" required></simple-input>
                    <simple-input v-model="event.qtd" label="quantidade" type="number" min="0" max="1000" step="1" required></simple-input>
                    <simple-input v-model="event.sold_quantity" label="quantidade vendida" type="text" required></simple-input>
                    <simple-input v-model="event.category" label="categoria" type="text" required></simple-input>
                    <simple-input v-model="event.class" label="classe do produto" type="text" required></simple-input>
                    <simple-input v-model="event.action2" label="alterar/adicionar/remover" type="text" required>
                    </simple-input>
                    <simple-input v-model="event.img" label="caminho até imagem" type="text" required></simple-input>
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
>>>>>>> produtos
</template>

<script>
import SimpleInput from "@/components/SimpleInput.vue";
export default {
<<<<<<< HEAD
  components: { SimpleInput },
  data() {
    return {
      event: {
        email: "",
        action: "",

        nameprd: "",
        number: "",
        description: "",
        price: "",
        action2: "",
        qtd: "",
      },
      typeUser: "Cliente",
    };
  },
  methods: {
    isAdmin() {
      console.log("is_admin adminview", this.$store.state.is_admin);
      console.log("logado", this.$store.state.user_authenticated);
      console.log(
        "teste de sanidade",
        this.$store.state.is_admin && this.$store.state.user_authenticated
      );
      return this.$store.state.is_admin && this.$store.state.user_authenticated;
    },

    updateUser: async function () {
      try {
        let body = JSON.stringify({ is_admin: this.typeUser });
        let resp = await fetch(
          `http://localhost:3000/customers/${this.event.email}`,
          {
            method: "PUT",
            body: body,
            headers: {
              "x-access-token": localStorage.user_token,
              "Content-Type": "application/json",
            },
          }
        );

        if (resp.status === 200) {
          alert("Dado atualizado");
        } else {
          alert("Falha na atualização do dado");
        }
      } catch (e) {
        alert("Erro durante a atualização do dado do usuário: " + e);
      }
    },

    removeUser: async function () {
      try {
        let resp = await fetch(
          `http://localhost:3000/customers/admin/${this.event.email}`,
          {
            method: "DELETE",
            headers: {
              "x-access-token": localStorage.user_token,
              "Content-Type": "application/json",
            },
          }
        );
        if (resp.status === 200) {
          alert("Cliente removido com sucesso");
        } else {
          alert("Falha na remoção do cliente");
        }
      } catch (e) {
        alert("Error durante a remoção do cliente: " + e);
      }
=======
    components: { SimpleInput },
    data() {
        return {
            event: {
                email: "",
                action: "",

                nameprd: "",
                slug: "",
                description: "",
                price: 0,
                action2: "",
                qtd: 0,
                sold_quantity: 0,
                category: "",
                class: "",
                img: "",
            },
            typeUser: "Cliente",
        };
>>>>>>> produtos
    },
    methods: {
        isAdmin() {
            return this.$store.state.is_admin && this.$store.state.user_authenticated;
        },

<<<<<<< HEAD
    handleCadastro() {
      if (this.event.email !== "" && this.event.cpf !== "") {
        if (this.event.action.toLowerCase() === "alterar") {
          this.updateUser();
        } else if (this.event.action.toLowerCase() === "remover") {
          this.removeUser();
        } else {
          alert("Ação inválida!");
        }
      } else alert("Preencha todos os campos!");
    },

    createProduct: async function () {
      let productInfo = {
        name: this.event.nameprd,
        description: this.event.description,
        product_id: this.event.number,
        price: this.event.price,
        qtd: this.event.qtd,
      };

      try {
        let body = JSON.stringify(productInfo);
        let resp = await fetch("http://localhost:3000/products/", {
          method: "POST",
          body: body,
          headers: {
            "x-access-token": localStorage.user_token,
            "Content-Type": "application/json",
          },
        });
        if (resp.status === 200) {
          alert("Produto criado com sucesso");
        } else {
          alert("Falha na criação do produto");
        }
      } catch (e) {
        alert("Erro durante a criação do produto: " + e);
      }
    },

    removeProduct: async function () {
      try {
        let resp = await fetch(
          `http://localhost:3000/products/${this.event.number}`,
          {
            method: "DELETE",
            headers: {
              "x-access-token": localStorage.user_token,
              "Content-Type": "application/json",
            },
          }
        );
        if (resp.status === 200) {
          alert("Produto removido com sucesso");
        } else {
          alert("Falha na remoção do produto");
        }
      } catch (e) {
        alert("Error durante a remoção do produto: " + e);
      }
    },

    updateProduct: async function () {
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
          `http://localhost:3000/products/${this.event.number}`,
          {
            method: "PUT",
            body: body,
            headers: {
              "x-access-token": localStorage.user_token,
              "Content-Type": "application/json",
            },
          }
        );

        if (resp.status === 200) {
          alert("Dado atualizado");
        } else {
          alert("Falha na atualização do dado");
        }
      } catch (e) {
        alert("Error update: " + e);
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
        if (this.event.action2.toLowerCase() === "alterar") {
          this.updateProduct();
        } else if (this.event.action2.toLowerCase() === "remover") {
          this.removeProduct();
        } else if (this.event.action2.toLowerCase() === "adicionar") {
          this.createProduct();
        } else {
          alert("Ação inválida!");
        }
      } else alert("Preencha todos os campos!");
=======
        updateUser: async function () {
            try {
                let is_admin = (this.typeUser === 'Cliente' ? false : true);
                console.log(is_admin);
                let resp = await fetch(
                    `http://localhost:3000/customers/${this.event.email}`,
                    {
                        method: "PUT",
                        body: JSON.stringify({ is_admin: is_admin }),
                        headers: {
                            "x-access-token": localStorage.user_token,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (resp.status === 200) {
                    alert("Dado atualizado");
                } else {
                    alert("Falha na atualização do dado");
                }
            } catch (e) {
                alert("Erro durante a atualização do dado do usuário: " + e);
            }
        },

        removeUser: async function () {
            try {
                let resp = await fetch(
                    `http://localhost:3000/customers/admin/${this.event.email}`,
                    {
                        method: "DELETE",
                        headers: {
                            "x-access-token": localStorage.user_token,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (resp.status === 200) {
                    alert("Cliente removido com sucesso");
                } else {
                    alert("Falha na remoção do cliente");
                }
            } catch (e) {
                alert("Error durante a remoção do cliente: " + e);
            }
        },

        handleCadastro() {
            if (this.event.email !== "" && this.event.cpf !== "") {
                if (this.event.action.toLowerCase() === "alterar") {
                    this.updateUser();
                } else if (this.event.action.toLowerCase() === "remover") {
                    this.removeUser();
                } else {
                    alert("Ação inválida!");
                }
            } else alert("Preencha todos os campos!");
        },

        createProduct: async function () {
            console.log('aqui');
            let productInfo = {
                description: this.event.description,
                price: this.event.price,
                slug: this.event.slug,
                img: this.event.img,
                sold_quantity: this.event.sold_quantity,
                stock_quantity: this.event.qtd,
                category: this.event.category,
                product_class: this.event.class,
                title: this.event.nameprd
            };
            try {
                let resp = await fetch("http://localhost:3000/products/", {
                    method: "POST",
                    body: JSON.stringify(productInfo),
                    headers: {
                        "x-access-token": localStorage.user_token,
                        "Content-Type": "application/json",
                    },
                });
                if (resp.status === 201) {
                    alert("Produto criado com sucesso");
                } else {
                    alert("Falha na criação do produto");
                }
            } catch (e) {
                alert("Erro durante a criação do produto: " + e);
            }
        },

        removeProduct: async function () {
            try {
                let resp = await fetch(
                    `http://localhost:3000/products/admin`,
                    {
                        method: "DELETE",
                        body: JSON.stringify( { slug: this.event.slug }),
                        headers: {
                            "x-access-token": localStorage.user_token,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (resp.status === 200) {
                    alert("Produto removido com sucesso");
                } else {
                    alert("Falha na remoção do produto");
                }
            } catch (e) {
                alert("Error durante a remoção do produto: " + e);
            }
        },

        updateProduct: async function () {
            let productInfo = {
                description: this.event.description,
                price: this.event.price,
                slug: this.event.slug,
                img: this.event.img,
                sold_quantity: this.event.sold_quantity,
                stock_quantity: this.event.qtd,
                category: this.event.category,
                product_class: this.event.class,
                title: this.event.nameprd
            };

            try {
                let body = JSON.stringify(productInfo);
                let resp = await fetch(
                    `http://localhost:3000/products/admin/${this.event.slug}`,
                    {
                        method: "PUT",
                        body: body,
                        headers: {
                            "x-access-token": localStorage.user_token,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (resp.status === 200) {
                    alert("Dado atualizado");
                } else {
                    alert("Falha na atualização do dado");
                }
            } catch (e) {
                alert("Error update: " + e);
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
                if (this.event.action2.toLowerCase() === "alterar") {
                    this.updateProduct();
                } else if (this.event.action2.toLowerCase() === "remover") {
                    this.removeProduct();
                } else if (this.event.action2.toLowerCase() === "adicionar") {
                    this.createProduct();
                } else {
                    alert("Ação inválida!");
                }
            } else alert("Preencha todos os campos!");
        },
>>>>>>> produtos
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

.user-type-choice {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
}

.user-type-checkbox-container {
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-type-checkbox {
    width: 15px;
}

.user-type-label {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
}

.user-type-choice {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
}

.user-type-checkbox-container {
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-type-checkbox {
  width: 15px;
}

.user-type-label {
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
}
</style>