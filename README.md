# GoBarber :construction: :construction: (em construção) :construction: :construction: 
Uma aplicação criada para controle de agendamentos em uma barbearia durante a GoStack 13 
<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/node-js.png" width="500">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/react.png" width="500">
</p>

<hr>

### :scroll: Sobre o projeto

<p>Para seu desenvolvimento foram criadas duas aplicações, a primeira usando NodeJs para a construção do servidor e a segunda usando React para o Frontend. 
No projeto também foi utilizado CSS, feito especificamente para o mesmo, usando o StyledComponents.
</p>

<p>Ele conta com uma tela de cadastro, e uma tela de login.</p>

<p align="center">
   <img src="https://github.com/carlosguttemberg/GoBarber/blob/master/img/signUp.png">
   <img src="https://github.com/carlosguttemberg/GoBarber/blob/master/img/signIn.png">
</p>

### :rocket: Executando o projeto

<p>Primeiro é preciso instalar as dependencias do projeto, para isso basta acessar a pasta backend e a pasta frontend pelo terminal e executar o yarn</p>

```bash
  yarn
```

### :factory: Executando o servidor (Aplicação em NodeJs)
<p>Acessar a pasta backend e alterar o arquivo ormconfig.json com as configurações da base de dados local.</p>

<p>Pelo terminal será preciso executar a criação das tabelas na base de dados, executando o comando:</p>

```bash
  yarn typeorm migration:run
```

<p>Feito isso só será preciso executar o comando abaixo na pasta do backend para que o servidor fique rodando, ele funciona na porta 3333</p>

```bash
  yarn dev:server
```

### :computer: Executando o Frontend (React)

<p>Na aplicação react só será preciso executar o start e o site será carregado.</p>

```bash
  yarn start
```
