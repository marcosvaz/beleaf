# Beleaf
Plataforma para teste de conhecimento pela [Beleaf](https://beleaf.com.br).

&nbsp;

### URL's do projeto
A plataforma está rodando neste link [Beleaf - Home](http://bit.ly/2YWlzog)  
E a API está rodando neste link [Beleaf - API](http://bit.ly/2YIA4Mu)  

&nbsp;

### Linguagens e motivos de escolha
As linguagens escolhidas foram:  
NodeJS com Express, por ser simples e de bom entendimento, além de ser rápido de implementar o modelo MVC e mudar para outras linguagens.  
EJS no frontend, pois é o mais rápido e simples de se utilizar no NodeJS, além da sintaxe dele ser bem simples de ser entendida.  
MySQL de banco de dados, por conta de ser o banco relacional mais conhecido do mercado, e é bem simples utilizá-lo, ou de mudar para um banco não-relacional de alta performance.  
JWT para autenticação na API, para a segurança da API e da modificação dos dados, além de já ter funções simples para utilizá-lo.  
Para deploy, foi utilizado o Elastic Beanstalk da Amazon Web Services, Inc..  
Para testes automatizados, foram feitos testes básicos com Mocha, Chai, Should (para extender os testes) e Request (para as requisições na API) que podem ser melhorados e otimizados futuramente à depender das regras de negócio entre outros fatores.  
Para cache seria utilizado o Redis, pois ele é um sistema de cache distribuído, então não sofreria do problema de perder todo o cache se o servidor ou processo for finalizado, como acontece com cache em memória.  

&nbsp;

## Índice
### Instalação
1. [Rodando o projeto localmente com Docker](/documentation/1-Rodando-o-projeto-localmente-com-Docker.md)

### Documentação da API
#### Cardápio
1. [Mostrar todos os items do cardápio](/documentation/2-Mostrar-todos-os-items-do-cardapio.md)
2. [Adicionar novos items ao cardápio (Necessita do Auth Token)](/documentation/3-Adicionar-novos-items-ao-cardapio.md)
3. [Atualizar items do cardápio (Necessita do Auth Token)](/documentation/4-Atualizar-items-do-cardapio.md)
4. [Deletar items do cardápio (Necessita do Auth Token)](/documentation/5-Deletar-items-do-cardapio.md)
5. [Ordenar items por nome](/documentation/6-Ordenar-items-por-nome.md)
6. [Ordenar items por preço](/documentation/6-Ordenar-items-por-preco.md)

#### Usuários
1. [Mostrar todos os usuários](/documentation/7-Mostrar-todos-os-usuarios.md)
2. [Adicionar novos usuários (Necessita do Auth Token)](/documentation/8-Adicionar-novos-usuarios.md)
3. [Atualizar usuários existentes (Necessita do Auth Token)](/documentation/9-Atualizar-usuarios-existentes.md)
4. [Deletar usuários (Necessita do Auth Token)](/documentation/10-Deletar-usuarios.md)

#### Autenticação
1. [Gerar um Auth Token](/documentation/11-Gerando-Auth-token.md)
2. [Usuário e Senha de teste](/documentation/12-Usuario-de-teste.md)