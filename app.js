/* //requerir una única función
const crearArchivo = require('./multiplicar/multiplicar.js') */

//Requerir varias funciones con destructuración
// console.log(argv)
const { argv } = require('./config/yargs.js'),
    colors = require('colors')
const { crearArchivo, listar, leerArchivo } = require('./multiplicar/multiplicar.js')

const c = console.log
    //yargs
    // c(argv)


const comando = argv._[0]

switch (comando) {
    case 'listar':
        listar(argv.b, argv.l).then(data => c(data)).catch(err => c(err))
        break;
    case 'crear':
        crearArchivo(argv.b, argv.l).then(archivo => c(`Se creó el archivo ${archivo}`)).catch(err => c(err))
        break;
    default:
        break;
}

if (comando == 'leer') {

    leerArchivo(argv.b).then(archivo => c(archivo)).catch(err => c(err))
}






// c(argv)
// console.log(multiplicar)
// console.log(module)