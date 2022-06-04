<template>
  <header id="header">
    <nav class="nav-menu">
      <ul>
        <li class="drop-down">
          <a href="">acessórios</a>
          <ul>
            <li><router-link :to="{name: 'accessories', hash: '#clothing'}" class="drop-down-router">roupas</router-link></li>
            <li><router-link :to="{name: 'accessories', hash: '#bed_houses'}" class="drop-down-router">camas e casinhas</router-link></li>
            <li><router-link :to="{name: 'accessories', hash: '#toys'}" class="drop-down-router">brinquedos</router-link></li>
            <li><router-link :to="{name: 'accessories', hash: '#food_accessories'}" class="drop-down-router">alimentação</router-link></li>
          </ul>
        </li>
        <li class="drop-down">
          <a href="">serviços</a>
          <ul>
            <li><router-link :to="{name: 'services', hash: '#banho'}" class="drop-down-router">banho</router-link></li>
            <li><router-link :to="{name: 'services', hash: '#tosa'}" class="drop-down-router">tosa</router-link></li>
          </ul>
        </li>
        <li class="drop-down">
          <a href="">comidinhas</a>
          <ul>
            <li><router-link :to="{name : 'foods', hash: '#snacks'}" class="drop-down-router">petiscos</router-link></li>
            <li><router-link :to="{name: 'foods', hash: '#pet_food'}" class="drop-down-router">rações</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/" class="current_page"
            ><strong>meu amigo pet</strong></router-link>
        </li>
        <li><router-link to="/login" class="nav-router">entrar</router-link></li>
        <li><router-link to="/sign-up" class="nav-router">cadastrar</router-link></li>
        <li><router-link to="/shop-cart" class="nav-router">carrinho</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
  #header {
    background-color: #D8FF6E;
    height: 12%;
}

ul {
    list-style-type: none;
}

li a:link {
    text-decoration: none;
}

li {
    display: inline-block;
    font-size: 12px;
    padding: 16px 16px;
}

.nav-menu>ul>li,
.nav-menu a,
.nav-menu .nav-router,
.nav-menu .drop-down li {
    position: relative;
}

.nav-menu {
    display: table;
    text-align: center;
    margin: 0 auto;
}

.nav-menu a,
.nav-menu .nav-router {
    display: block;
    text-transform: lowercase;
    color: #000000;
    padding: 10px 16px;
    transition: 0.3s;
    font-size: 13px;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
}

.nav-menu a.current_page,
.nav-menu .nav-router.current_page,
.nav-menu router-link.current_page {
    color: #d403b9;
}

.nav-menu a:hover,
.nav-menu .active>a,
.nav-menu li:hover>a,
.nav-menu .drop-down-router:hover,
.nav-menu .active>.drop-down-router,
.nav-menu li:hover>drop-down-router,
.nav-menu .nav-router:hover,
.nav-menu .active>.nav-router,
.nav-menu li:hover>nav-router {
    color: #00c1c1;
    text-decoration: none;
}

.nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 0;
    opacity: 0;
    top: calc(100% - 30px);
    z-index: 99;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: ease all 0.3s;
}

.nav-menu .drop-down:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}


.nav-menu .drop-down ul router-link {
    padding: 8px 2px;
    font-size: 14px;
    font-weight: 560;
    text-transform: none;
    color: #000000;
}

.nav-menu .drop-down ul router-link:hover,
.nav-menu .drop-down ul .active>router-link,
.nav-menu .drop-down ul li:hover>router-link {
    color: #00c1c1;
}


li>router-link>strong {
    font-size: 24px;
}

</style>