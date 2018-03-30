const express = require('express');
const bodyParser = require('express');
const port = 3005;
const app = express();
const c = require('./controller.js')

app.use(bodyParser.json());


app.get('/api/transactions', c.read);
app.post('/api/transactions', c.create);
app.put('/api/transactions/:id', c.update);
app.delete('/api/transactions/:id', c.delete);
app.delete('/api/transactions', c.deleteAll)




app.listen(port, ()=>console.log("I'm listening on port 3005"))
