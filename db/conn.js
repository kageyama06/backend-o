const Sequelize = require('sequelize')
const sequelize = new Sequelize('e_commerce', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.log('Erro de Conexão'+err)
})

module.exports = sequelize