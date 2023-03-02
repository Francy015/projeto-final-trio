const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('livraria', 'root', '', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
}) 

try {
    sequelize.authenticate()
    console.log('Conectamos com sucesso!')
} catch(err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize