const cityList = require('./cityList'); 

const express = require('express'),
    http = require('http'),
    app = express();

const port = 777; 
   
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const filterCitys = (inputValue) => {
    console.log(inputValue);
    return cityList;
    // TODO Хз почему не работает
    // return cityList.filter(i =>
    //    i.label.toLowerCase().startsWith(inputValue.toLowerCase())
    //  );
  };

app.get('/api', (req, res) => {
    
    res.status(200).type('text/json')
    res.send(filterCitys(req.query.q))
  })


http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});
