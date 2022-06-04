<template>
    <footer id="footer">
            <div class="fcontainer">
                <div class="col">
                    <h5 class="ftitle">contatos</h5>
                    <p>+55 (16) 3241-1413<br>
                        meu.amigo.pet@usp.br</p>
                </div>

                <div class="col">
                    <h5 class="ftitle">endereço</h5>
                    <p>Rua Alberto Janequine, 32
                        Bairro Jardim Olivia
                        São Caetano do Norte, SP
                        Brasil</p>
                </div>

                <div class="col">
                    <h5 class="ftitle">sobre nós</h5>
                    <p>Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer
                    </p>
                </div>
            </div>
        </footer>
</template>

<style scoped>
#footer {
    margin-top: auto;
    background: #EDFFBD;
    justify-content: center;
    overflow: auto;
    padding: 15px 70px 15px 70px;
}

#footer .fcontainer {
    display: grid;
    grid-template-columns: 25% 25% auto;
    gap: 50px;
}

#footer .fcontainer p {
    font-size: 12px;
}
</style>