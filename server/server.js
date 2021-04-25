const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;

var app = express();
app.use(bodyParser.json());

app.get('/api/customers', (req, res) => {
  res.status(200).send({success: true, customers: [{name: 'Rares'}, {name: 'Vlad'}]});
});

app.listen(PORT, () => {
  console.log('Server started new client.');
});