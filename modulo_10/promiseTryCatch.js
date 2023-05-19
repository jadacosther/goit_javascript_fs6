function divide(dividendo, divisor) {
    return new Promise((resolve, reject) => {
      if (divisor === 0) {
        reject(new Error('No se puede dividir entre 0'));
      } else {
        resolve(dividendo/divisor);
      }
    });
  }
  
  async function test() {
    // esperamos por la respuesta
    try {
      const result = await divide(5, 0);
      console.log(result);
    } catch (err) {
      console.error(err.message);
    }
  }
  
   test();