const app=require('./app');
const mongodb=require('./config/db');
const userModel=require('./model/user.model');

const port =3000;

app.get('/',(req,res)=>{

    res.send('hello world  okrld')

});


app.listen(port,()=>{

    console.log(`listening on port http://localhost:${port}`);
});