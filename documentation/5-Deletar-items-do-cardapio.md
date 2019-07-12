# Deletar items do cardápio
Na seção sobre API, usaremos o [Postman](https://www.getpostman.com/downloads/) como exemplo para realizar os testes e as requisições, caso queira requisitar de outra maneira, fique à vontade.

&nbsp;

## Abra o Postman e realize login/registro ou simplesmente clique para pular a etapa.
* Após entrar no Postman, feche o popup, troque onde está escrito GET por DELETE
* Insira a url "http://192.168.99.100:300/marmitas/delete/1" no local escrito Enter a request URL, onde 1 é o ID do elemento que deseja deletar
* Vá até a aba Authorization, ao lado de Params, no TYPE escolha Bearer Token e insira seu [Auth Token](/documentation/11-Gerando-Auth-token.md)
* Aperte SEND para enviar a requisição, e abaixo no Body, deve aparecer o resultado da requisição, semelhante ao seguinte:
```json
OK
```