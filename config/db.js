const mongoose=require('mongoose');

const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newTODO').on('open',()=>{
    console.log('database connected')
}).on('error',()=>{
    console.log('connection error')
});


module.exports=connection;