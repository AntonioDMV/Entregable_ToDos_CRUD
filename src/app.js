const express = require('express');
const db = require('./utils/database');
const Todo = require('./models/todos.model');
const todoRoutes = require('./routes/todo.routes')

Todo;

const PORT = 7000;

db.authenticate()
.then(() => {
    console.log('conexion a base de datos ok XD')
})
.catch(
    (error) => {
    console.log(error);
})

 db.sync()
 .then(() => {
    console.log('base de datos sincronizada XD')
})
 .catch((error) => {
    console.log(error)
})

const app = express();

app.use(express.json());

app.use(todoRoutes);

app.get('/', (req, res) => {
    res.send('bienvenido a mi servidor');
});

app.listen(PORT, () => {
    console.log(`servidor escuchandi en el puerto ${PORT}`)
})