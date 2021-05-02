const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;
const cors = require('cors');
const serveStatic = require('serve-static');
require('dotenv').config();

const mailgunApiKey = process.env.MAILGUN_KEY;
const domain = process.env.MAILGUN_DOMAIN;

var mailgun = require('mailgun-js')({
   apiKey: mailgunApiKey,
   domain: domain
});

var app = express();
app.use(serveStatic(__dirname + '/client/build'));
app.use(cors());
app.use(bodyParser.json());


app.post('/api/send_message', (request, response) => {
  const data = {
    from: 'MRV New Client <no-reply@mrv-it.com>',
    to: 'modure_rares@mrv-it.com, m.rares956@yahoo.com',
    subject: 'Quote Request',
    html: `<b>Email: </b> ${request.body.email} <br><br> <b>Message: </b> ${request.body.message}`
  };

  mailgun.messages().send(data, (error, body) => {
    if(error) {
      console.log('error');
      response.status(200).send({success: false})
    } else {
      console.log('Emails sent!');
      response.status(200).send({success: true})
    }
  });
});

app.listen(PORT, () => {
  console.log('Server started.');
});

