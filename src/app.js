const express = require ('express');

const sequelize = require('./util/database')

const Account = require('./models/accountCreate')



const app = express();



sequelize.sync().catch(err =>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('funfou')
})
