const express = require('express')
const hbs = require('hbs')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static('public'));
// Usa la ruta absoluta para mayor seguridad
app.use(express.static(path.join(__dirname, 'public_html')));
//app.use(express.static('public_html'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        nombrecompleto: 'CRISTIAN MENDOZA',
        carne: '2290-21-20201',
        titulo: 'Portafolio | Cristian Mendoza.',
        profesion: 'Ingenieria en Sistemas',
        ocupacion: 'Estudiante de Ingenieria'
    })
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        titulo: 'Sobre mi | Cristian Mendoza.'
    });
});

app.get('/curriculum', (req, res) => {
    res.render('lenguajes', {
        titulo: 'Lenguaje que domino'
    });
});

app.get('/portafolio', (req, res) => {
    res.render('contacto', {
        titulo: 'Contacto'
    });
});






app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})