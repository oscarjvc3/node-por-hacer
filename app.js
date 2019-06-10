const argv = require('./config/yargs.js').argv;
const colors = require('colors');
let comando = argv._[0];
const porHacer = require('./por-hacer/por-hacer.js');
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        break;
    case 'actualizar':
        let flag = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(flag);
        break;
    case 'borrar':
        let flag_borrar = porHacer.borrar(argv.descripcion);
        console.log(flag_borrar);
        break;
    default:
        console.log('Opcion incorrecta'.green);
}