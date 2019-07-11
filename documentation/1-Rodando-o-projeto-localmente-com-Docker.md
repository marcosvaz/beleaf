#### Instruções para rodar o projeto com Docker
Intruções para iniciar o projeto utilizando Nodejs e MySQL

* Baixe o Docker Toolbox [nesse link](https://download.docker.com/win/stable/DockerToolbox.exe) e abra-o
> Caso seu usuário não tenha permissão de Administrador, clique com o botão direito no Docker Quickstart Terminal, em 'Executar como Administrador', e entre com sua senha da conta de Administrador. (Espere até que seja gerado um IP e apareça o logo no terminal)

* Entre na pasta raiz do projeto
```bash
cd C:/Users/SEU_USUÁRIO/CAMINHO_DA_PASTA/PASTA_DO_PROJETO
```
> Troque o 'SEU_USUARIO', 'CAMINHO_DA_PASTA' e 'PASTA_DO_PROJETO' pelas referências específicas no seu computador.

* Antes de construir as imagens do projeto, crie um aquivo ".env" dentro da pasta "api", passando igual o ".env.exemple" dentro da mesma
> A estrutura é a seguinte, onde SECRET é a chave e SEU_SEGREDO é o valor que você quer definir
```env
SECRET=SEU_SEGREDO
```

* Construa as imagens do projeto com:
```bash
docker-compose up -d
```
> Espere um tempo até o projeto ser totalmente instalado, a primeira vez demora mais. Quando parar de aparecer os comandos no terminal, acesse o projeto pelo navegador na seguinte URL: [192.168.99.100:3000](http://192.168.99.100:3000)

* Caso faça alterações no projeto, use o seguinte comando para reiniciar as imagens:
```bash
docker-compose down && docker rmi beleafapi_platform beleafapi_db beleafapi_api && docker-compose up -d
```

* E para simplesmente parar os processos, use:
```bash
docker-compose down && docker rmi beleafapi_platform beleafapi_db beleafapi_api
```