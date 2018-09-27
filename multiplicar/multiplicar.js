const fs = require('fs'),
    colors = require('colors')

const crearArchivo = (base, limit) => new Promise((resolve, reject) => {
    if (!Number(base || limit)) {
        reject(`la base ${base} o el limit ${limit} no es un número`)
        return
    }
    let data = ''
    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i}\n`
    }
    fs.writeFile(`./text/texto-pleca${base}.txt`, data, (err) => {
        if (err) {
            reject(err)
        }
        resolve(`texto-pleca${base}.txt`.rainbow)
    })
})


const listar = (base, limit) => new Promise((resolve, reject) => {
    if (!Number(base || limit)) {
        reject(`la base ${base} o el limit ${limit} no es un número`)
        return
    }
    let data = `================\n`.red
    data += `tabla del ${base}\n`.green
    data += `==================\n`.blue
    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i}\n`.rainbow
    }
    resolve(data)
})


const leerArchivo = base => new Promise((resolve, reject) => {
    if (!Number(base)) {
        reject(`la base ${base} no es un número`)
        return
    }
    fs.readFile(`./text/texto-pleca${base}.txt`, 'utf8', (err, data) => {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})








/* //una única función a exportar
module.exports = crearArchivo */

//Varias funciones a exportar en un objeto
module.exports = {
    crearArchivo,
    listar,
    leerArchivo
}