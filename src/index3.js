class heroiAventura{
  constructor(nomeHeroi, idadeHeroi, tipoHeroi){
    this.nomeHeroi = nomeHeroi;
    this.idadeHeroi = idadeHeroi;
    this.tipoHeroi = tipoHeroi;
  }
  definirAtaque(){
    let ataqueHeroi;
    switch(this.tipoHeroi){
      case "mago":
        ataqueHeroi = "magia";
        break;
      case "guerreiro":
        ataqueHeroi = "espada";
        break;
      case "monge":
        ataqueHeroi = "artes marciais";
        break;
      case "ninja":
        ataqueHeroi = "shuriken";
        break;
    }
    return ataqueHeroi;
  }
  escrever(){
      console.log(`O ${this.tipoHeroi} atacou usando ${this.definirAtaque()}.`)
  }

}

let heroi = new heroiAventura("joão", "25 anos", "guerreiro")

heroi.escrever();
