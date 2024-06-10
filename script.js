$ node

	⁠const crypto = require('crypto');

// Per visualizzare i metodi
console.log(Object.keys(crypto)); 


	⁠const randomID = crypto.randomBytes(8).toString('hex'); //Per generar un id Random
	⁠randomID