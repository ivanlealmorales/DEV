const matematica = {
    dividir: function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Divisão por zero não é possível";
      }
    }
  };
  
  const num1 = 15;
  const num2 = 3;
  const resultadoDivisao = matematica.dividir(num1, num2);
  
  console.log(`O resultado da divisão de ${num1} por ${num2} é igual a ${resultadoDivisao}`);
  