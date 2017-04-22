const express = require('express');
const app = express();


var routes = require('./routes');
var producto  = require('./controllers/senderos')



app.get('/', routes.index);
app.get('/', producto.index);

app.listen(3000, function() {
    console.log('listening on 3000')
})