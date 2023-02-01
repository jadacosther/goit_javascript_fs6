/*
 * Sólo hay dos tipos de transacciones.
 * Se puede depositar o retirar dinero de la cuenta.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Cada transacción es un objeto con propiedades: id, type и amount
   */
  
  const account = {
    // Saldo actual de la cuenta
    balance: 0,
  
    // Historial de transacciones
    transactions: [],
  
    /*
     * El método crea y retorna el objeto de la transacción.
     * Acepta la suma y el tipo de transacción.
     */
    createTransaction(amount, type) {},
  
    /*
     * Método responsable de añadir el monto al saldo.
     * Recibe el monto de la transacción.
     * Llama a createTransaction para crear un objeto de transacción
     * y después lo añade al historial de transacciones
     */
    deposit(amount) {},
  
    /*
     * El método responsable de retirar el monto del saldo.
     * Recibe el monto de la transacción.
     * Llama a createTransaction para crear un objeto de transacción
     * y después lo añade al historial de transacciones
     *
     * Si amount es mayor que el saldo actual, imprime un mensaje diciendo
     * que, no es posible retirar esta cantidad, no hay fondos suficientes.
     */
    withdraw(amount) {},
  
    /*
     * El método devuelve el saldo actual
     */
    getBalance() {},
  
    /*
     * El método busca y devuelve el objeto de la transacción según su id
     */
    getTransactionDetails(id) {},
  
    /*
     * El método devuelve la cantidad de fondos
     * de determinado tipo de transacción de todo el historial de transacciones
     */
    getTransactionTotal(type) {},
  };