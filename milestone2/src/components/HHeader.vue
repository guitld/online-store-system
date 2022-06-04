<template>
  <header id="header">
    <nav class="nav-menu">
      <ul>
        <li class="drop-down">
          <a href="">acessórios</a>
          <ul>
            <li><a href="accessories.html#clothing">roupas</a></li>
            <li><a href="accessories.html#bed_houses">camas e casinhas</a></li>
            <li><a href="accessories.html#toys">brinquedos</a></li>
            <li><a href="accessories.html#food_accessories">alimentação</a></li>
          </ul>
        </li>
        <li class="drop-down">
          <a href="">serviços</a>
          <ul>
            <li><a href="services.html#banho">banho</a></li>
            <li><a href="services.html#tosa">tosa</a></li>
          </ul>
        </li>
        <li class="drop-down">
          <a href="">comidinhas</a>
          <ul>
            <li><a href="foods.html#snacks">petiscos</a></li>
            <li><a href="foods.html#pet_food">rações</a></li>
          </ul>
        </li>
        <li>
          <a href="index.html" class="current_page"
            ><strong>meu amigo pet</strong></a
          >
        </li>
        <li><a href="login.html">entrar</a></li>
        <li><a href="sign_up.html">cadastrar</a></li>
        <li><a href="shop_cart.html">carrinho</a></li>
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
  }

  .nav-menu>ul>li,
  .nav-menu a,
  .nav-menu .drop-down li {
    position: relative;
  }

  .nav-menu {
    display: table;
    text-align: center;
    margin: 0 auto;
  }

  .nav-menu a {
    display: block;
    text-transform: lowercase;
    color: #000000;
    padding: 10px 37px;
    transition: 0.3s;
    font-size: 13px;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
  }

  .nav-menu a.current_page {
    color: #d403b9;
  }

  .nav-menu a:hover,
  .nav-menu .active>a,
  .nav-menu li:hover>a {
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

  .nav-menu .drop-down ul a {
    padding: 0 auto;
    font-size: 14px;
    font-weight: 560;
    text-transform: none;
    color: #000000;
  }

  .nav-menu .drop-down ul a:hover,
  .nav-menu .drop-down ul .active>a,
  .nav-menu .drop-down ul li:hover>a {
    color: #00c1c1;
  }

  li>a>strong {
    font-size: 24px;
  }

</style>