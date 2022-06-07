<template>
    <div class="container">
            <div class="sign-in-flexbox">
                <div class="sign-in">
                    <h4>Acesse sua conta</h4>
                    <p>é novo por aqui? <a href="sign_up.html"><strong>cadastre-se</strong></a></p>
                    <form class="formulary">
                        <div class="email">
                            <input type="email" id="femail" name="femail" placeholder=" " required autocomplete="off">
                            <label>e-mail</label>
                        </div>
                        <div class="password">
                            <input type="password" id="fpassword" name="fpassword" placeholder=" " required>
                            <label>senha</label>
                        </div>
                        <input class="btn_submit" type="submit" value="Entrar">
                    </form>
                </div>

                <div class="pet-img">
                    <img src="assets/img/header-pet-na-cabine.png" alt="" class="form-pet-logo">
                </div>
            </div>
        </div>
</template>

<style scoped>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
}

</style>