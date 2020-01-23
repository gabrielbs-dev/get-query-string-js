# Pegar a Query String com Javascript

```javascript
function getParams(){
    const paramsURL = location.href.split(location.pathname)[1];
    const parmasExtracted = paramsURL.substring(1, paramsURL.length).split("&");
    const params = {};

    parmasExtracted.forEach(element => {
        params[element.split("=")[0]] = element.split("=")[1];
    });

    return paramsURL == "" ? {} : params;
}
```

## Versão minificada (Minified version)
```javascript
function getParams(){const t=location.href.split(location.pathname)[1],n=t.substring(1,t.length).split("&"),i={};return n.forEach(t=>{i[t.split("=")[0]]=t.split("=")[1]}),""==t?{}:i}
```

## Como usar (How to use)
```javascript
const params = getParams(); // Retorna um JSON
console.log(params);
```

<img src="imagens/console.png" style="display:block;margin: 0 auto;margin-top: 30px">