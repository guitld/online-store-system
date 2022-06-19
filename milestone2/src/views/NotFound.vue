<template>
  <div class="wrapper">
    <div class="container-404">
        <div class="error-404-text">
            <span><strong>Página não encontrada. Volte a navegar em nossa <router-link to="/">loja</router-link>! 
                </strong></span>
        </div>
        <img :src="lost_dog_image" alt="" class="lost-dog-img">
    </div>
  </div>
</template>

<script>
    export default {
        name: "NotFound",
        
        data() {
            return {
                lost_dog_image: "/assets/img/lost-dog.png"
            }
        },
    };

</script>

<style scoped>
    .container-404 {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .error-404-text {
        margin: auto auto;
        background-color: white;
        padding: 40px;
        text-align: center;
        border-radius: 5px;
        width: 60%;
    }

    .error-404-text a {
        text-decoration: none;
        color: #cb5c7f;
    }

    .lost-dog-img {
        width: 80%;
        max-width: 600px;
        display: block;
        margin: auto;
    }
</style>
