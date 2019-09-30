const fs = require('fs');

fs.readFile('city.json', 'utf8', function (err, data) {
    if (err) {
        console.error(err)
        throw err
    }

    let city = JSON.parse(data).filter(e => {
        //if (e.country == 'RU') console.log(e);
        return e.country == 'RU';
    }).map(a => {
    return {"id": a.id,"name": a.name}
    });

    console.log(city);


    fs.writeFile('city.min.json', JSON.stringify(city), (err) => {
        if (err) {
            console.error(err)
            throw err
        }

        console.log('Saved data to file.')
    });
});




