//哈希算法
const cryto = require('crypto');
const hash = cryto.createHash('md5');
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
console.log(hash.digest('hex'));
//如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果1f32b9c9932c02227819a4151feed43e131aca40;还可以使用更安全的sha256和sha512

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'secret-key');
hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');
console.log(hmac.digest('hex')); 