const bcrypt = require('bcryptjs')

// Encriptamos
const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain,10)
    return hash
}

// Comparamos
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare }