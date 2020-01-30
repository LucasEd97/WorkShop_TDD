const functions = {
  soma: (num1, num2) =>{

  return num1 + num2;
  },
  divisao: (dividendo, divisor) => {
    if(divisor === 0) throw new Error("divisao por 0 não é válida");
    return dividendo/divisor;
  }
}


module.exports = functions;