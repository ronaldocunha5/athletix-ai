function calcularScore() {

```
let foto = Number(document.getElementById("foto").value);
let bio = Number(document.getElementById("bio").value);
let perfil = Number(document.getElementById("perfil").value);
let conteudo = Number(document.getElementById("conteudo").value);
let identidade = Number(document.getElementById("identidade").value);
let posicionamento = Number(document.getElementById("posicionamento").value);
let engajamento = Number(document.getElementById("engajamento").value);

let total =
    foto +
    bio +
    perfil +
    conteudo +
    identidade +
    posicionamento +
    engajamento;

let classificacao = "";

if(total < 40){
    classificacao = "Perfil Iniciante";
} else if(total < 60){
    classificacao = "Perfil em Desenvolvimento";
} else if(total < 80){
    classificacao = "Perfil Profissional";
} else {
    classificacao = "Perfil de Destaque";
}

document.getElementById("resultado").innerHTML =
    "ATHLETIX SCORE: " + total + "/100 <br>" +
    classificacao;
```

}

