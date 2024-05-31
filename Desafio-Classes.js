class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia"; 
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
      }
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const mago = new Heroi("Merlin", 500, "mago");
  mago.atacar(); // Exibe: O mago Merlin atacou usando magia
  
  const guerreiro = new Heroi("Arthur", 30, "guerreiro");
  guerreiro.atacar(); // Exibe: O guerreiro Arthur atacou usando espada
  
  const monge = new Heroi("Zenyatta", 60, "monge");
  monge.atacar(); // Exibe: O monge Zenyatta atacou usando artes marciais
  
  const ninja = new Heroi("Ryu Hayabusa", 35, "ninja");
  ninja.atacar(); // Exibe: O ninja Ryu Hayabusa atacou usando shuriken
  