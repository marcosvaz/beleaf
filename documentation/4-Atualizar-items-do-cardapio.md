# Atualizar items do cardápio
Na seção sobre API, usaremos o [Postman](https://www.getpostman.com/downloads/) como exemplo para realizar os testes e as requisições, caso queira requisitar de outra maneira, fique à vontade.

&nbsp;

## Abra o Postman e realize login/registro ou simplesmente clique para pular a etapa.
* Após entrar no Postman, feche o popup, troque onde está escrito GET por PUT
* Insira a url "http://192.168.99.100:300/marmitas/update/1" no local escrito Enter a request URL, onde 1 é o ID do elemento que deseja alterar
* Vá até a aba Authorization, ao lado de Params, no TYPE escolha Bearer Token e insira seu [Auth Token](/documentation/11-Gerando-Auth-token.md)
* Vá até a aba Body, ao lado de Headers e abaixo da URL
* Escolha "x-www-form-urlencoded"
* Insira os elementos "nm_name", "ds_description", "nr_price", "ds_ingredients", "nr_stock", "ds_image_url" e "nr_discount" nas KEY's
* Nos VALUE's, coloque os valores que você deseja alterar em cada campo
* Aperte SEND para enviar a requisição, e abaixo no Body, deve aparecer o ID do elemento alterado semelhante ao seguinte:
```json
1
```