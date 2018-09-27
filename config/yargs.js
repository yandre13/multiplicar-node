const argv = require('yargs').command(['listar', 'crear'], 'flags: listar, crear => listar y crear archivos', {
    base: {
        alias: 'b',
        demand: true
    },
    limit: {
        alias: 'l',
        default: 10
    }
}).command('leer', 'flags: leer un archivo de la carpeta text', {
    base: {
        alias: 'b',
        demand: true
    }
}).help().argv

//Si el objeto se repite en los comando se puede crear un objeto y luego se pasa como argumento
// console.log(argv)
module.exports = {
    argv
}