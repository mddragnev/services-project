const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const soap = require('soap');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    soap.createClientAsync('http://localhost:8000/translate/?wsdl')
        .then(client => {
            client.translate_text({ text: req.query.text, dest: req.query.dest, src: req.query.src }, (error, response, xml) => {
                res.send({ data: response.translate_textResult });
            });

        })
});


app.get('/detect', (req, res) => {
    soap.createClientAsync('http://localhost:8000/detect/?wsdl')
        .then(client => {
            client.detect_text({text: req.query.text}, (error, response, xml) => {
                console.log(response);
                res.send({ data: response.detect_textResult });
            });

        })
});

app.listen(3001, () => {
    console.log('listeting to 3001')
});