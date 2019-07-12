# Ordenar items por preço
Na seção sobre API, usaremos o [Postman](https://www.getpostman.com/downloads/) como exemplo para realizar os testes e as requisições, caso queira requisitar de outra maneira, fique à vontade.

&nbsp;

## Abra o Postman e realize login/registro ou simplesmente clique para pular a etapa.
* Após entrar no Postman, feche o popup, e insira a url "http://192.168.99.100:300/orderbyprice" no local escrito Enter a request URL
* Aperte SEND para enviar a requisição, e abaixo no Body, deve aparecer um JSON semelhante ao seguinte:
```json
[
    {
        "nm_name": "Lasanha bolonhesa do futuro",
        "ds_description": "Um dos pratos mais famosos do mundo acaba de ganhar um novo significado nas mãos da nossa chef. A Lasanha do Futuro™ é feita com massa fresca e sementes de chia, ricas em vitaminas do complexo B, que dão um sabor irresistível à composição. As camadas de mussarela à base de castanhas dão um efeito cremoso igualzinho ao queijo tradicional, deixando qualquer um com brilho nos olhos e água na boca. O molho de tomate é cuidadosamente preparado com tomates italianos maduros que, combinado à proteína da Fazenda Futuro™, dão um toque especial e suculento à bolonhesa.",
        "nr_price": 28.9,
        "ds_ingredients": "Tomate, massa de lasanha, futuro burguer (água, preparado proteíco [proteína texturizada de soja, proteína isolada de soja, proteína de ervilha e farinha de grão de bico/, gordura vegetal, amido modificado, cebola, condimento preparado sabor carne, sal, açúcar, beterraba em pó, estabilizante metilcelulose, aroma natural e antioxidante ácido asórbico), mussarela de castanha (água, castanha de caju, óleo de coco, fermentado de semente de quinoa, polvilho doce, sal, massa de soja fermentada, suco de limão, alho em pó, lecitina de soja, goma xantana, kappa carragena, acidulante ácido lático), azeite de oliva, sal. CONTÉM GLÚTEN.",
        "nr_stock": 20,
        "ds_image_url": "https://veganja.vteximg.com.br/arquivos/ids/155804/Lasanha-do-Futuro.jpg?v=636967347182430000",
        "nr_discount": 0
    },
]
```