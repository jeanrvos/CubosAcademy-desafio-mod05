// // Configurações Heroku
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//         host: 'ec2-3-213-146-52.compute-1.amazonaws.com',
//         user: 'sbzoezbbrusnez',
//         database: 'd2fl0k5n919onm',
//         password: '67b38a67b8cf647c08e17378378a770c2d40ea73c389603058c1ccbf41d2b4d1',
//         ssl: true,
//     }
// });

// Configurações DB local
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    }
});

module.exports = knex;