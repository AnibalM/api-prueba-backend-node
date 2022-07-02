let fs = require('fs');
const csv = require('csv-parser');
const rows = [];

fs.createReadStream('./src/utils/hearthstone.csv')
    .pipe(csv())
    .on('data', (row) => {
        rows.push(row)
    })
    .on('end', () => {
        console.log('CSV procesado');
    });

module.exports = rows;