const http = require('http')
const data = JSON.stringify({
  test: 'tst'
})
const options = {
  hostname: 'localhost',
  port: 9999,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data)
  }
}

const requestSend = (resolve, reject) => {
  const req = http.request(options, (res) => {
    console.log(`Статус: ${res.statusCode}`);
    console.log(`Заголовок: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`Тело: ${chunk}`);
    });
    res.on('end', () => {
      console.log('Нет больше данных в запросе.');
      resolve('end');
    });
  });

  req.on('error', (e) => {
    console.error(`Проблема с запросом: ${e.message}`);
    reject(e)
  });

  req.write(data);
  req.end();
}


const main = () => {
  console.log(process.argv);
  const n = parseInt(process.argv[2]);
  const typeSend = process.argv[3];



  if (typeSend === 'parallel') {
    let propises = [];
    for (let index = 0; index < n; index++) {
      propises.push(new Promise((resolve, reject) => requestSend(resolve, reject)))
    }

    Promise.all(propises)
      .then(console.log('Все запросы отправлены паралельно'));
  }
  else if (typeSend === 'serial') {
    console.log('Все запросы отправляем последовательно');

      (async () => {
        for (let index = 0; index < n; index++) {
          await new Promise((resolve, reject) => requestSend(resolve, reject));
        }
      })();
  }
}

main()