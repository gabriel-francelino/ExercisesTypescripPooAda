# Exercícios de Orientação a Objetos com TypeScript

Este repositório tem como objetivo organizar os exercícios práticos realizados durante a formação "Vem Ser Tech - Back End da Ada Tech". A linguagem de programação escolhida para os exercícios é TypeScript, e dentro do diretório `src` contém a solução para cada exercício.

## Tecnologias
![TypesScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)

## Compilação e execução
* Para compilar o projeto você executar o seguinte comando:
```
npm run build
```
* Você pode executar os exercicios passando o nome do diretório dele como parametro da seguinte maneira:
```
npm run ex1 // executa o programa do exercício 1
```


## Exercício 1: Criação de Classe e Instância
   - Crie uma classe `Carro` com propriedades como modelo, ano e cor.
   - Instancie dois objetos dessa classe com diferentes valores.
   - Imprima no console os detalhes de cada carro.

## Exercício 2: Herança e Polimorfismo
   - Crie uma classe base chamada `Animal` com métodos como `emitirSom` e `mover`.
   - Derive duas classes, `Cachorro` e `Pássaro`, que herdam da classe `Animal`.
   - Sobrescreva o método `emitirSom` em ambas as classes derivadas.
   - Crie instâncias de `Cachorro` e `Pássaro` e chame seus métodos.

## Exercício 3: Encapsulamento e Métodos Estáticos
   - Crie uma classe `Calculadora` com métodos de operações matemáticas (soma, subtração, multiplicação, divisão).
   - Encapsule as operações matemáticas, permitindo apenas o acesso através dos métodos da classe.
   - Adicione um método estático que retorna o valor absoluto de um número.

## Exercício 4: Interfaces e Implementação
   - Crie uma interface `FormaGeometrica` com métodos como `calcularArea` e `calcularPerimetro`.
   - Implemente a interface em classes como `Quadrado` e `Círculo`.
   - Instancie objetos dessas classes e chame seus métodos.

## Exercício 5: Composição de Objetos
   - Crie uma classe `Motor` com métodos como `ligar` e `desligar`.
   - Em seguida, crie uma classe `Carro` que possui uma instância de `Motor`.
   - Implemente métodos em `Carro` que delegam chamadas aos métodos correspondentes em `Motor`.
   - Teste a funcionalidade ligando e desligando o carro.

## Exercício 6: Tratamento de Exceções
   - Crie uma classe `ContaBancaria` com propriedades como saldo e métodos como `sacar` e `depositar`.
   - Implemente uma verificação para garantir que o saldo não fique negativo após um saque.
   - Utilize exceções para lidar com situações em que o saque não pode ser realizado devido a saldo insuficiente.
   - Teste a classe com casos que resultem em exceções.

## Exercício 7: Padrões de Projeto: Singleton
   - Implemente uma classe `ConfiguracaoApp` usando o padrão Singleton, garantindo que exista apenas uma instância dessa classe.
   - Adicione propriedades de configuração à classe e métodos para acessá-las.
   - Tente criar várias instâncias da classe e verifique se todas se referem à mesma instância.

---

Fique à vontade para clonar este repositório, explorar os diferentes diretórios e analisar as soluções para cada exercício.