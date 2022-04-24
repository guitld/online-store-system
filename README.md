# Meu Amigo Pet

Projeto da disciplina Introdução ao Desenvolvimento Web - SCC0219.

O tema escolhido por nós foi desenvolver um website de um petshop virtual.

### Autores

| NUSP     | Nome                          |
|----------|-------------------------------|
| 11795551 |	Bernardo Marques Costa       |
| 11795811 |  Guilherme Lourenço de Toledo |
| 11369767 |  Laís Saloum Deghaide         |

### Tabela de conteúdos 

- [1. Requisitos](#1-requisitos)
- [2. Descrição do Projeto](#2-descrição-do-projeto)
- [3. Comentários sobre o código](#3-comentários-sobre-o-código)
- [4. Plano de teste](#4-plano-de-teste)
- [5. Resultados dos testes](#5-resultados-dos-testes)
- [6. Building](#6-building)
- [7. Problemas](#7-problemas)
- [8. Comentários](#8-comentários)
- [9. Link para o Figma](#9-link-para-o-figma)

## 1. Requisitos
O sistema deve ter 2 tipos de usuários: clientes e administradores.

Os administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos fornecidos. O aplicativo já vem com uma conta `admin` com senha `admin`.

Clientes são usuários que acessam o sistema para comprar produtos.

O registro do administrador contém nome, CPF, telefone e e-mail.

O registro de cada cliente contém nome, CPF, endereço, telefone e e-mail.

Os registros de produto incluem nome, id, foto, descrição, preço, quantidade em estoque e quantidade vendida.

Venda de produtos: Os produtos são selecionados, são incluídos em um carrinho e sua quantidade escolhida. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendida é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente quando o pagamento é efetuado ou quando os clientes removem todos os produtos.

Gerenciamento de produto: os administradores podem criar/atualizar/ler/excluir novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.

## 2. Descrição do Projeto
Nesta primeira entrega, criamos o HTML e CSS da página principal, login e cadastro.

Todas as outras telas foram feitas no Figma e criamos também o diagrama de navegação. 

Para garantir uma boa experiência para o úsario, criamos um menu em todas as páginas que garante a movimentação rápida e eficiente entre as páginas.
A página de Carrinho só será possivel de visualizar após o cliente realizar o login, bem como a página de alteração de informações de cadastro pelo usuário.

### Diagrama de navegação
<img src="https://github.com/guitld/online-store-system/blob/main/assets/img/diagrama_navegacao.jpeg" width=900px>

### Funcionalidades
As funcionalidades do site são:

- Login com email e senha na plataforma, com opção de criar uma nova conta.
- Visualização das informações do cliente, com opção de alterar cadastro.
- Visualização da página de administrador, com opção de administrar os produtos e usuários da loja.
- Acesso à homepage, com visualização das seções do site: prestação de serviços (tosa e banho), vendas de comidas e acessórios para pet.
- Visualização de um produto, com seu nome, descrição, preço, id, quantidade em estoque, quantidade já vendida e botão para adicionar ao carrinho.
- Acesso ao carrinho de compras, com opção de mudar a quantidade de itens, conferir o preço total e finalizar compra.
- Opção de inserir informações do cartão de crédito para efetuar o pagamento.


## 3. Comentários sobre o código
Utilizamos apenas HTML e CSS, conforme explicitado no Millestone 1. Nossas páginas são estaticas e, para essa primeira entrega, criamos 3 HTMLs.


## 4. Plano de teste
Nosso projeto foi desenvolvido e testado no Edge e no Google Chrome, no Windows.

## 5. Resultados dos testes
O comportamento do site apresenta ser satisfatório nos dois navegadores testados, com um tempo de resposta rápido. 

## 6. Building
Para essa primeira entrega, basta baixar esse repositório e abrir as páginas HTML no navegador da sua escolha.

## 7. Problemas
Certa dificuldade de traduzir as imagens do mockup para código HTML e CSS, por causa da falta de padronização do tamanho das fontes entre as telas feitas no mockup.

## 8. Comentários
Algumas das ferramentas usadas pelo grupo foram:

Figma (mockup) <br>
HTML e CSS para as 3 páginas pedidas (mockup) <br>
Draw.io (diagrama de navegação)

## 9. Link para o Figma
https://www.figma.com/file/jM4s8v0abX4JJOMJaymm74/meu-amigo-pet?node-id=0%3A1
