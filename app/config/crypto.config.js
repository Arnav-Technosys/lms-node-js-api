//Checking the crypto module
const crypto = require("crypto");

const algorithm = "aes256";
var key = "password";

//Encrypting text
function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, key);
  var encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex");
  return encrypted;
}

// Decrypting text
function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, key);
  var decrypted = decipher.update(text, "hex", "utf8") + decipher.final("utf8");
  return decrypted;
}

module.exports = {
  encrypt,
  decrypt,
};
