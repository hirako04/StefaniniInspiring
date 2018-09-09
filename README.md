# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: A tag async é usada para indicar o navegador que o script pode ser executado assincronamente, a tag defer informa o navegador para executar o script apenas quando a análise do HTML estiver finalizada.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: O parâmetro callback serve para chamar a função initMap, após a importação da api do google maps.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Se removermos o parâmetro &callback o mapa não irá aparecer pois a função initMap responsável por iniciar o mapa não foi chamado.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: 

### e) Explique para que servem as seguintes tags do index.html: 
  a `<link rel="manifest" href="manifest.json">
  b <meta name="theme-color" content="">
  c <meta name="apple-mobile-web-app-capable" content="yes">
  d <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R:  a) O arquivo manifest.json importado serve para controlar o aplicativo ou site é exibido (necessário para PWA)
    b) É usado para trocar a cor do toolbar quando se passa um parametro, exemplo: <meta name="theme-color" content="#db5945">
    c) Define que o site ou app é capaz de oferecer toda a experiência sem a necessidade da interface do usuário do Google Chrome, incluindo navegação de retorno e encaminhamento.
    d) É usado para mudar a barra de status de um aplicativo web progressivo em iOS para preto.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Acredito que não seja um PWA pois não possui atualizações por service worker.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: