function ManipulaString() {
    this.inverter = function(texto) {
      return texto.split('').reverse().join('');
    };
  
    this.contarCaracteres = function(texto) {
      return texto.length;
    };
  }
  
  const utilString = new ManipulaString();
  
  console.log(utilString.inverter("Olá")); // Saída: álO
  console.log(utilString.contarCaracteres("Hello, world!")); // Saída: 13
  