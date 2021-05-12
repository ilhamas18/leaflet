const jwt = require('jsonwebtoken');

const generateToken = (payload, secretKey) => jwt.sign(payload, secretKey);
const verifyToken = token => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { generateToken, verifyToken };