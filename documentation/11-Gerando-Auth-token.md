# Gerando um Auth token
Na seção sobre API, usaremos o [Postman](https://www.getpostman.com/downloads/) como exemplo para realizar os testes e as requisições, caso queira requisitar de outra maneira, fique à vontade.

&nbsp;

## Abra o Postman e realize login/registro ou simplesmente clique para pular a etapa.
* Após entrar no Postman, feche o popup, troque onde está escrito GET por POST
* Insira a url "http://192.168.99.100:300/autentication" no local escrito Enter a request URL
* Vá até a aba Body, ao lado de Headers e abaixo da URL
* Escolha "x-www-form-urlencoded"
* Insira os elementos "nm_user", "nm_pass" nas KEY's
* Nos VALUE's, coloque seu usuário e senha, ou use o de [teste](/documentation/12-Usuario-de-teste.md)
* Aperte SEND para enviar a requisição, e abaixo no Body, deve aparecer o resultado da requisição semelhante o seguinte:
```json
{
    "auth": true,
    "token": "94a08da1fecbb6e8b46990538c7b50b2.94a08da1fecbb6e8b46990538c7b50b2.94a08da1fecbb6e8b46990538c7b50b2"
}
```