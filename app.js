import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'

const app = express();


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

 app.use('/api', require('./routes/stock'));
 

// conexion a base de datos
const uri = 'mongodb://localhost:27017/crudVue' 
const options = { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex:true }
// Or using promises
mongoose.connect(uri, options).then( 
    ()=>{console.log('conectado a la DB');},
    err=>{console.log(err);}
  );



// no se toma esta ruta ya q esta tomando la de la carpeta public
/* 
app.use('/',function (req,res) {
    res.send('hola q tal')
}) */


// Middleware para Vue--permite recargar la pagina(si no tira error)
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname,'public')))

app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('app conectada a puerto:' + app.get('puerto'));
})



